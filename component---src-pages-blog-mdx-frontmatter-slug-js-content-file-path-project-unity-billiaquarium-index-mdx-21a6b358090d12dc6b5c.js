"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[484],{2639:function(e,t,n){var a=n(1151),l=n(7294);function r(e){const t=Object.assign({h2:"h2",hr:"hr",p:"p",strong:"strong"},(0,a.ah)(),e.components),{Flex:n,NavLinkOut:r}=t;return n||i("Flex",!0),r||i("NavLinkOut",!0),l.createElement(l.Fragment,null,l.createElement(t.h2,null,"Project links"),"\n",l.createElement(n,null,l.createElement(r,{target:"https://fuatw.itch.io/billiaquarium"},"Play The Game"),l.createElement(r,{target:"https://github.com/Thelarion/BilliardGameJam"},"Github")),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,null,"Overview"),"\n",l.createElement(t.p,null,"Billiaquarium is an underwater 8-pool/billiard game developed in one week for the Brackeys Game Jam 2023.2.\nThe game is developed in Unity, where I took part as the team's programmer."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,null,"Design"),"\n",l.createElement(t.p,null,"The theme of the game jam was ",l.createElement(t.strong,null,'"Deeper and Deeper"')," and the theme could be freely interpreted by the participants."),"\n",l.createElement(t.p,null,"The initial idea was a normal 8-pool game but set in an underwater setting,\nmeaning the game has underwater physics such as floating 8-pool balls. Initially, the arena was a normal 8-pool table, but we decided\nto have a 3D arena instead due to its fun interaction with the floating ball mechanics."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,null,"Development"),"\n",l.createElement(t.p,null,"I was responsible for developing the player and AI interaction. I implemented the player aiming and shooting mechanism and\nintegrate it with the physics engine. I also implemented the AI aiming and shooting mechanism, which will occur after the player\nhas ended their turn. I utilized a state machine architecture for the implementation of the interaction, which is fitting due to the game's clear\nseparation between multiple states and its behaviors."),"\n",l.createElement(t.p,null,"The player first needs to aim using the mouse. After that, the player\ncan adjust the strength of the stick by pulling and pushing the mouse while holding the left mouse button. When the player is ready,\nthey can simply stop holding the left mouse button, and the stick will shoot the ball."),"\n",l.createElement(t.p,null,'As for the AI, I had it look for the closest valid ball in regards to the cue (white) ball and the surrounding holes. After\nthe AI has decided which ball to shoot and which hole to aim to, the AI will decide at which part of the ball should the cue ball hit. This can be determined\nby calculating the distance from the target ball to the target hole. I added a small randomness to the AI\'s aiming and shooting mechanism\nas a basis for "difficulty settings" to the game.'),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,null,"Reception"),"\n",l.createElement(t.p,null,"The game is ranked 165 in the overall category out of 919 entries. The game scored the highest in the innovation category,\nat rank 46."))}function i(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)}},8789:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return u}});var a=n(2639),l=n(7294),r=n(8032),i=n(6700),o=n(7302),h=n(7410),c=n(1707);const s=e=>{let{data:t,children:n}=e;const a=(0,r.c)(t.mdx.frontmatter.hero_image);return l.createElement(i.Z,{mode:"CONTENT",extData:t},l.createElement(r.G,{className:"rounded-lg",image:a,alt:t.mdx.frontmatter.hero_image_alt}),l.createElement(h._v),l.createElement(o.Z,null,n))},m=e=>{let{data:t}=e;return l.createElement(c.Z,{title:t.mdx.frontmatter.title})};function u(e){return l.createElement(s,e,l.createElement(a.Z,e))}},7302:function(e,t,n){var a=n(7294),l=n(1151),r=n(7410),i=n(6328),o=n(8032);const h={p:e=>{let{children:t}=e;return a.createElement(r.Pg,{className:"w-full"},t)},h2:e=>{let{children:t}=e;return a.createElement(r.QE,{className:"w-full"},t)},hr:r.eJ,li:e=>{let{children:t}=e;return a.createElement(r.Li,{className:"w-full pl-2 lg:pl-4"},t)},ol:e=>{let{children:t}=e;return a.createElement("ol",{className:"list-decimal py-[2vh] pl-8 lg:pl-16"},t)},Flex:e=>{let{children:t}=e;return a.createElement("div",{className:"w-full flex flex-col lg:flex-row gap-4 pb-[2vh] lg:pb-[1.5vh]"},t)},NavLinkOut:i.kA,StaticImage:o.S};t.Z=e=>{let{children:t}=e;return a.createElement(l.Zo,{components:h},t)}},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:r(e),a.createElement(l.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-project-unity-billiaquarium-index-mdx-21a6b358090d12dc6b5c.js.map