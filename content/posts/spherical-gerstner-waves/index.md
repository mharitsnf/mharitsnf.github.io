+++
title = "Spherical Gerstner Wave: Vertex Shader"
date = 2025-09-03T18:09:51+02:00
summary = "Ocean simulation vertex shader breakdown for simulating planets in Godot 4."
readingTime = true
tags = ["godot", "computer-graphics"]
draft = true
+++

---


I spent the past few days trying to figure out how to properly simulate ocean waves for spherical levels in video games. I managed to do it for flat surfaces thanks to Catlike Coding's awesome walkthrough of the Gerstner Wave, but trying to project a flat plane onto a sphere and making the waves work like before is a different problem, one that I could not solve on my own.

So I thought there has to be someone smarter than me who had solved this issue before, knowing that we've had games that features planets with oceans, right? (Looking at you, Giant's Deep in Outer Wilds.) And well, I stumbled upon a paper called [_Real-Time Rendering of Procedurally Generated Planets_](https://cescg.org/cescg_submission/real-time-rendering-of-procedurally-generated-planets/), written by Florian Michelic and Michael Kenzel which explains how to deal with this exact problem! Usually I'd steer clear from scientific papers because they can be rather difficult to comprehend, but honestly it's hard to do that when you're working on computer graphics stuff. So, driven by my curiosity, I managed to implement their method in my game engine of choice, namely Godot Engine 4, and actually had a pretty good time reading the paper as I think it was really well written!

I'm quite satisfied with the result (you can see in the video below); the method they came up with produces waves that are distortion-free, meaning it will look good regardless of where you are, whether you're looking from a certain point on the planet or from the space, and it works wonders with large amount of waves (more detailed) or small amount of waves (more simple, which is what I'm after.)
{{< video src="overview" >}}
I used 20 waves in the video, in which you can play around with the plane size and the radius. You can also tweak the amplitude, frequency, and time scale of the waves. It is also possible to change the orientation of the plane using the basis uniform.

---

# Setting Up the Scene
Let's get started! As I mentioned, I'm using Godot Engine 4, but you should be able to replicate this in any other engine. At the end of this article, you'll have a spherical gerstner wave implementation in the vertex shader.

Note that I'm not doing the frament shader for now mainly because I'm lazy, and also I haven't got a good art direction for my ocean. I'll come back to that in a future article.

Firstly, let's create a `MeshInstance3D` node that would be our main visual, which will hold our shader material as well. We want a PlaneMesh for the mesh, and set the size to 2 on both the width and height. This way we can ensure that the bottom left corner of the plane will fall on the coordinates (-1, -1), while the top right corner of the plane will fall on the coordinate (1, 1). This is necessary for the grid projection calculation that we will be doing in the next section.

![Test](initial-plane.png)

We also want to set the subdivide width and depth to a number we like. I'm setting both the width and depth to 128, as I think it's a good spot for the fidelity I'm after. You can crank it up to 256 or 512 to make it even more hi-fi, or lower it to 64 to make it more lo-fi. Just remember, the higher the number, the slower it becomes as the number of vertices the shader will need to operate will also increase.

Now, let's create a spatial shader file (I call mine `ocean.shader`), and save it somewhere in the project (I put mine in the root of the project). After that, let's also create a material based on that shader called `m_ocean.tres`, and then assign it to the plane:

![Test](material-setup.png)

---

# Projection Calculation

Let's start with a basic projection method. The basic projection method (that is not distortion-free) invovles raising the plane (increasing the Y position of the plane), normalizing the vertices so that we would project the vertices onto a unit sphere, and then multiplying that value with our desired planet radius. Let's add new uniform variables in the shader called `y_offset` and `radius`, and then do the calculation:

```glsl
shader_type spatial;

uniform float y_offset = 100.;
uniform float radius = 1000.;

void vertex() {
    vec3 init_vertex = VERTEX;
    init_vertex.y = y_offset;
    VERTEX = normalize(init_vertex) * radius;
}
```

This is how it looks like with `y_offset` equals to `1.5` and `radius` equals to `100.0`:


![Basic projection](1-1-basic-projection.png)

It looks okay, but you can see the distortion problem when you set the `y_offset` value to something close to `0.0` (which transforms the plane into a hemisphere), and change the view mode to wireframe mode:

![Distorted projection](1-2-distorted.png)

The vertices are concentrated on the bottom part, leaving the top part with very few vertices for us to operate on.

The projection method proposed in the paper involves adding an extra calculation on the `init_vertex.y` variable so that it transforms the plane into something resembling a dome using the `pow(x,y)` function, before finally adding the `y_offset` value onto `init_vertex.y` again:

```glsl
...
uniform float y_exponent = 4.0;
...

void vertex() {
    vec3 init_vertex = VERTEX;
    init_vertex.y = (1. - pow(abs(init_vertex.x), y_exponent)) * (1. - pow(abs(init_vertex.z), y_exponent));
    vec3 offset = vec3(0., y_offset, 0.);
    VERTEX = normalize(init_vertex) * radius;
}
```

This is how it looks like with the same value, where `y_offset` equals to `1.5` and `radius` equals to `100.0`:

![No distortion projection](1-3-no-distortion.png)

As you can see, the distortion is no longer there. We can keep the `y_exponent` value to `4.0` as we have right now, but you can tweak that around. The paper mentions that setting the `y_exponent` value to `2.0` also works pretty good, but overall `4.0` looks the best.

Technically, we are done with the projection. But, while we're at it, lets add a new uniform called `basis`:

```glsl
...
uniform float y_offset = 100.;
uniform float radius = 1000.;
uniform mat3 basis;
...
```
And apply the `basis` to the projection calculation:

```glsl
...
    vec3 init_vertex = VERTEX;
    init_vertex.y = (1. - pow(abs(init_vertex.x), y_exponent)) * (1. - pow(abs(init_vertex.z), y_exponent));
    vec3 rotated_vertex = basis * init_vertex;
    vec3 rotated_offset = basis * vec3(0., y_offset, 0.);
    vec3 grid = normalize(rotated_offset + rotated_vertex) * radius;
    VERTEX = grid;
...
```
Now, we can use update this `basis` uniform when we want to rotate the plane. For example, this is the result when I change the basis to `(0.0, 1.0, 0.0), (-1.0, 0.0, 0.0), (0.0, 0.0, 1.0)`, which essentially making the plane to face right:

![No distortion projection](1-4-rotated.png)

By playing around with the `y_offset` and updating the `basis` accordingly, we can create the effect of having the planet covered in water when we look at it from the space by setting the `y_offset` to something close to `0.0`, whereas when we get closer to the planet surface, we can increase the value to something like `1.5` so that the ocean plane would shrink, only to cover the necessary area around the camera.

Cool! Now let's continue to the Gerstner wave calculation.

---
# Gerstner Wave Calculation