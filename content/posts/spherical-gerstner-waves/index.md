+++
title = "Spherical Gerstner Wave: Vertex Shader"
date = 2025-09-03T18:09:51+02:00
summary = "Vertex shader implementation for real-time ocean simulation in planets in Godot Engine 4."
readingTime = true
draft = false
+++

---


I spent the past few days trying to figure out how to properly simulate ocean waves for spherical levels in video games. I managed to do it for flat surfaces thanks to Catlike Coding's awesome walkthrough of the Gerstner Wave, but trying to project a flat plane onto a sphere and making the waves work like before is a different problem, one that I could not solve on my own without external help or sources.

So I thought there has to be someone smarter than me who had solved this issue before, knowing that we've had games that features planets with oceans, right? (Looking at you, Giant's Deep in Outer Wilds.) And well, I stumbled upon a paper called [_Real-Time Rendering of Procedurally Generated Planets_](https://cescg.org/cescg_submission/real-time-rendering-of-procedurally-generated-planets/), written by Florian Michelic and Michael Kenzel which explains how to deal with this exact problem! Usually I'd steer clear from scientific papers because they can be rather difficult to comprehend, but honestly it's hard to do that when you're working on computer graphics stuff. So, driven by my curiosity, I managed to implement their method in my game engine of choice, namely Godot Engine 4, and actually had a pretty good time reading the paper as I think it was really well written!

I think the end result look pretty good (like in the gif); the method they came up with produces waves that are distortion-free, meaning it will look good regardless of where you are, whether you're looking from a certain point on the planet or from the space, and it works wonders with large amount of waves (more detailed) or small amount of waves (more simple, which is what I'm after.)

{{< video src="overview" >}}

---

# Setting Up the Scene
Let's get started! As I mentioned, I'm using Godot Engine 4 because I love this engine and I'm quite proficient with it, but you should be able to replicate this in any other engine. At the end of this article, you'll have a spherical gerstner wave implementation in the vertex shader. Note that I'm not doing the frament shader for now mainly because I'm lazy, and also I haven't got a good art direction for my ocean. I'll come back to that in a future article.

Firstly, let's create a `MeshInstance3D` node that would be our main visual, which will hold our shader as well. We want a PlaneMesh for the mesh, and set the size to 2 on both the width and height. This way we can ensure that the bottom left corner of the plane will fall on the coordinates (-1, -1), while the top right corner of the plane will fall on the coordinate (1, 1). This is necessary for the grid projection calculation that we will be doing in the next section.

![Test](initial-plane.png)

We also want to set the subdivide width and depth to a number we like. I'm setting both the width and depth to 128, as I think it's a good spot for the fidelity I'm after. You can crank it up to 256 or 512 to make it even more hi-fi, or lower it to 64 to make it more lo-fi. Just remember, the higher the number, the slower it becomes as the number of vertices the shader will need to operate will also increase.

# Projecting a Plane onto a Sphere
Now, we're ready to jump into the vertex shader itself! The first task is to setup the projection of the plane / grid. This is to ensure that there's no distortion across the whole plane, so it would still look good when viewed from any angle. Let's create a spatial shader file, and save it somewhere in the project.

![Material setup](material-setup.png)

The basic projection method (that is not distortion-free) invovles raising the plane (increasing the Y position of the plane), normalizing the vertices so that we would get its vertex position on a unit sphere, and then multiplying that value with our desired planet radius. Let's try that method first; we firstly add a new uniform variable in the shader called `y_offset` and `radius`, and then do the calculation:

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

# Spherical Gerstner Wave

---

# Conclusion