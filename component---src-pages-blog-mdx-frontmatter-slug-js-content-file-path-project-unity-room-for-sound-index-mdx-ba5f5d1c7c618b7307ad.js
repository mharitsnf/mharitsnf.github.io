"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[776],{6236:function(e,t,n){var a=n(1151),r=n(7294);function l(e){const t=Object.assign({h2:"h2",hr:"hr",p:"p"},(0,a.ah)(),e.components),{Flex:n,NavLinkOut:l}=t;return n||i("Flex",!0),l||i("NavLinkOut",!0),r.createElement(r.Fragment,null,r.createElement(t.h2,null,"Project links"),"\n",r.createElement(n,null,r.createElement(l,{target:"https://arsith.itch.io/atmospheric-scattering-godot"},"Play The Demo"),r.createElement(l,{target:"https://developer.nvidia.com/gpugems/gpugems2/part-ii-shading-lighting-and-shadows/chapter-16-accurate-atmospheric-scattering?source=post_page-----1dca2d84452c--------------------------------"},"Reference Article"),r.createElement(l,{target:"https://medium.com/@mharitsnf/generating-texture-for-accelerating-atmospheric-scattering-in-godot-engine-4-1dca2d84452c"},"Development blog")),"\n",r.createElement(t.hr),"\n",r.createElement(t.h2,null,"Overview"),"\n",r.createElement(t.p,null,'"Room For Sound?" is a musical VR experience developed for Advanced Graphics and Interaction course at KTH. Through this project, we aim to learn and explore VR interaction with sound. The project has been displayed at ForskarFredag and Tekniska Museet in Stockholm. The project was developed by 5 people.'),"\n",r.createElement(t.p,null,"The player can choose to play between various percussive instruments, such as drums, maracas, and xylophone. There are backing tracks as well if the player wishes to play with them. On top of that, audiences can join the game as in-game avatars and can send messages and perform animations such as dancing and cheering through emotes."),"\n",r.createElement(t.hr),"\n",r.createElement(t.h2,null,"Development"),"\n",r.createElement(t.p,null,"During the development process, I am responsible in developing the interface for the audience to join the game. The interface is a website that I developed using React, and the communication between the website and the game is established using HTTP calls, which I developed using NodeJS and ExpressJS."),"\n",r.createElement(t.p,null,"I made APIs that allow the audiences to enter their names and send messages to the game. The messages they sent will then be displayed onto the VR environment which the player can see. The emotes, on the other hand, are predefined messages which will be processed first. The emote messages will trigger animations for their respective avatars, as seen in the image above."),"\n",r.createElement(t.hr),"\n",r.createElement(t.p,null,"A recurring problem is that the audience can only see  their avatars when the VR player is looking at them, since initially we are streaming the VR's perspective to a large screen. When the VR player is looking away from the audiences, the audience cannot see their avatars at all."),"\n",r.createElement(t.p,null,"To combat this problem, we implemented a new, static camera, looking at the audience dance floor. The static camera is then streamed to the audience website, so the audience can see their avatars from their phones. The static camera is streamed using Unity's Render Streaming package."))}function i(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)}},4279:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return u}});var a=n(6236),r=n(7294),l=n(8032),i=n(6700),o=n(7302),c=n(7410),s=n(1707);const h=e=>{let{data:t,children:n}=e;const a=(0,l.c)(t.mdx.frontmatter.hero_image);return r.createElement(i.Z,{mode:"CONTENT",extData:t},r.createElement(l.G,{className:"rounded-lg",image:a,alt:t.mdx.frontmatter.hero_image_alt}),r.createElement(c._v),r.createElement(o.Z,null,n))},m=e=>{let{data:t}=e;return r.createElement(s.Z,{title:t.mdx.frontmatter.title})};function u(e){return r.createElement(h,e,r.createElement(a.Z,e))}},7302:function(e,t,n){var a=n(7294),r=n(1151),l=n(7410),i=n(6328),o=n(8032);const c={p:e=>{let{children:t}=e;return a.createElement(l.Pg,{className:"w-full"},t)},h2:e=>{let{children:t}=e;return a.createElement(l.QE,{className:"w-full"},t)},hr:l.eJ,li:e=>{let{children:t}=e;return a.createElement(l.Li,{className:"w-full pl-2 lg:pl-4"},t)},ol:e=>{let{children:t}=e;return a.createElement("ol",{className:"list-decimal py-[2vh] pl-8 lg:pl-16"},t)},Flex:e=>{let{children:t}=e;return a.createElement("div",{className:"w-full flex flex-col lg:flex-row gap-4 pb-[2vh] lg:pb-[1.5vh]"},t)},NavLinkOut:i.kA,StaticImage:o.S};t.Z=e=>{let{children:t}=e;return a.createElement(r.Zo,{components:c},t)}},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return l}});var a=n(7294);const r=a.createContext({});function l(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:l(e),a.createElement(r.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-project-unity-room-for-sound-index-mdx-ba5f5d1c7c618b7307ad.js.map