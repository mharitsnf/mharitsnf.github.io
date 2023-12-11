"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[423],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,i=new RegExp("^"+l.source),s=new RegExp(l.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,n,r)=>{let l=!1,i=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,s=i,i=!0,o++):i&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=i,i=!1,l=!0):(l=n(c)===c&&r(c)!==c,s=i,i=r(c)===c&&n(c)!==c)}return e})(e,l,c)),e=e.replace(i,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,l):l(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return q},L:function(){return h},M:function(){return N},P:function(){return w},S:function(){return W},_:function(){return s},a:function(){return i},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return o}});var n=a(7294),r=(a(3204),a(5697)),l=a.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(a=l[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,l,s,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=s(e,g);return n.createElement(n.Fragment,null,n.createElement(p,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:r,alt:l="",shouldLoad:o}=e,c=s(e,f);return n.createElement("img",i({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,l=s(e,y);const o=l.sizes||(null==t?void 0:t.sizes),c=n.createElement(v,i({},l,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return n.createElement("source",{key:`${t}-${l}-${a}`,type:l,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var b;v.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},E.displayName="Picture",E.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const x=["fallback"],w=function(e){let{fallback:t}=e,a=s(e,x);return t?n.createElement(E,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(b=E.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const N=function(e){return n.createElement(n.Fragment,null,n.createElement(E,i({},e)),n.createElement("noscript",null,n.createElement(E,i({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=E.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],C=e=>e.replace(/\n/g,""),$=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(r)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},S={image:l().object.isRequired,alt:$},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],_=new Set;let O,j;const R=function(e){let{as:t="div",image:r,style:l,backgroundColor:c,className:d,class:m,onStartLoad:g,onLoad:p,onError:h}=e,f=s(e,I);const{width:y,height:v,layout:E}=r,b=u(y,v,E),{style:x,className:w}=b,N=s(b,T),k=(0,n.useRef)(),L=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(d=m);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(E,y,v);return(0,n.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(L);if(j&&_.has(L))return;let t,n;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:_.has(L),image:r},f)),_.has(L)||(t=requestAnimationFrame((()=>{k.current&&(n=s(k.current,L,_,l,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{_.has(L)&&j&&(k.current.innerHTML=j(i({isLoading:_.has(L),isLoaded:_.has(L),image:r},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,i({},N,{style:i({},x,l,{backgroundColor:c}),className:`${w}${d?` ${d}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},q=(0,n.memo)((function(e){return e.image?(0,n.createElement)(R,e):null}));q.propTypes=S,q.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:r,__error:l}=t,o=s(t,A);return l&&console.warn(l),r?n.createElement(e,i({image:r},o)):(console.warn("Image not loaded",a),null)}}const M=P((function(e){let{as:t="div",className:a,class:r,style:l,image:o,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:f,objectFit:y,objectPosition:v}=e,E=s(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),p=i({objectFit:y,objectPosition:v,backgroundColor:f},p);const{width:b,height:x,layout:$,images:S,placeholder:I,backgroundColor:T}=o,_=u(b,x,$),{style:O,className:j}=_,R=s(_,L),q={fallback:void 0,sources:[]};return S.fallback&&(q.fallback=i({},S.fallback,{srcSet:S.fallback.srcSet?C(S.fallback.srcSet):void 0})),S.sources&&(q.sources=S.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),n.createElement(t,i({},R,{style:i({},O,l,{backgroundColor:f}),className:`${j}${a?` ${a}`:""}`}),n.createElement(h,{layout:$,width:b,height:x},n.createElement(w,i({},m(I,!1,$,b,x,T,y,v))),n.createElement(N,i({"data-gatsby-image-ssr":"",className:g},E,d("eager"===c,!1,q,c,p)))))})),z=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},D=new Set(["fixed","fullWidth","constrained"]),F={src:l().string.isRequired,alt:$,width:z,height:z,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};M.displayName="StaticImage",M.propTypes=F;const W=P(q);W.displayName="StaticImage",W.propTypes=F},7410:function(e,t,a){a.d(t,{II:function(){return g},Li:function(){return c},Pg:function(){return o},QE:function(){return s},V1:function(){return i},_v:function(){return u},eJ:function(){return d}});var n=a(7294),r=a(4160),l=a(8032);const i=e=>{let{children:t}=e;return n.createElement("h1",{className:"font-bold text-3xl xl:text-5xl"},t)},s=e=>{let{children:t,className:a}=e;return n.createElement("h2",{className:`font-bold text-lg xl:text-xl pb-[3vh] xl:pb-[3vh] ${a}`},t)},o=e=>{let{children:t,className:a}=e;return n.createElement("p",{className:`xl:text-lg pb-[2vh] xl:pb-[1.5vh] ${a}`},t)},c=e=>{let{children:t,className:a}=e;return n.createElement("li",{className:`xl:text-lg pb-[2vh] xl:pb-[1.5vh] ${a}`},t)},u=()=>n.createElement("div",{className:"py-[6vh] xl:py-[8vh]"}),d=()=>n.createElement("div",{className:"py-[3vh] xl:py-[4vh]"}),m=e=>{let{node:t}=e;const a=(0,l.c)(t.frontmatter.thumbnail_image);return n.createElement(r.rU,{className:" group relative transition duration-500 w-auto h-[30vh] xl:h-[25vh]  rounded-lg",to:`/project/${t.frontmatter.slug}`},n.createElement(l.G,{className:"w-auto h-full rounded-lg",image:a,alt:t.frontmatter.thumbnail_image_alt}),n.createElement("div",{className:" group-hover:transition duration-500 w-full h-full   absolute bottom-0 left-0 rounded-lg  bg-black/50  opacity-0 group-hover:opacity-100  flex flex-col justify-end"},n.createElement("p",{className:"text-center px-6 pb-6"},t.frontmatter.title)))},g=e=>{let{sectionTitle:t,data:a}=e;return n.createElement("section",null,n.createElement(s,null,t),n.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"},a.nodes.map((e=>n.createElement(m,{key:e.id,node:e})))),n.createElement(d,null))}},6700:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(4160),l=a(6328),i=a(7410);const s=e=>{let{children:t}=e;return n.createElement("header",null,n.createElement(i._v,null),t,n.createElement(i._v,null))},o=e=>{let{data:t}=e;return n.createElement(s,null,n.createElement(i.V1,null,t.site.siteMetadata.title))},c=e=>{let{data:t}=e;return n.createElement(s,null,n.createElement(l.hb,null,n.createElement("span",{className:"text-xs xl:text-lg"},"←"),n.createElement("p",{className:"text-xs xl:text-lg"},"Back")),n.createElement(i.eJ,null),n.createElement(i.V1,null,t.mdx.frontmatter.title),n.createElement(i.eJ,null),n.createElement("p",{className:"font-bold text-xs xl:text-lg opacity-50"},t.mdx.frontmatter.date))};var u=e=>{let{mode:t,extData:a}=e;const l=(0,r.K2)("3159585216");switch(t){case"NORMAL":default:return n.createElement(o,{data:l});case"CONTENT":return n.createElement(c,{data:a})}};var d=e=>{let{pageTitle:t,mode:a,children:r,extData:l}=e;return n.createElement("div",{className:"container mx-auto py-16 px-16 xl:px-[20vw] xl:px-52"},n.createElement(u,{mode:a,extData:l}),n.createElement("main",null,t?n.createElement("h1",null,t):null,r),n.createElement(i._v,null),n.createElement(i.Pg,{className:"opacity-30"},"Harits Nur Fauzan 2023"),n.createElement(i._v,null))}},6328:function(e,t,a){a.d(t,{hb:function(){return l},kA:function(){return i}});var n=a(7294),r=a(4160);const l=e=>{let{children:t}=e;return n.createElement("button",{className:"flex flex-wrap gap-2 content-center opacity-50",onClick:()=>(0,r.c4)(-1)},t)},i=e=>{let{target:t,children:a}=e;return n.createElement("a",{className:" text-sm md:text-md lg:text-lg xl:text-lg underline underline-offset-2",href:t,target:"_blank",rel:"noopener noreferrer"},n.createElement("p",null,a," ⭷"))}},1707:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(4160);var l=e=>{let{title:t,description:a,pathname:l,children:i}=e;const{title:s,description:o,image:c,siteUrl:u,twitterUsername:d,favicon:m}=(0,r.K2)("925708495").site.siteMetadata,g={title:t||s,description:a||o,image:`${u}${c}`,favicon:`${u}${m}`,url:`${u}${l||""}`,twitterUsername:d};return n.createElement(n.Fragment,null,n.createElement("title",null,g.title),n.createElement("meta",{name:"description",content:g.description}),n.createElement("meta",{name:"image",content:g.image}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:g.title}),n.createElement("meta",{name:"twitter:url",content:g.url}),n.createElement("meta",{name:"twitter:description",content:g.description}),n.createElement("meta",{name:"twitter:image",content:g.image}),n.createElement("meta",{name:"twitter:creator",content:g.twitterUsername}),n.createElement("link",{rel:"icon",href:g.favicon}),i)}}}]);
//# sourceMappingURL=5375993a22631932d721f986027127203763f096-01545e0bf714a4376d1a.js.map