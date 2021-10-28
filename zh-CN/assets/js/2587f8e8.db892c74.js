"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9087],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},44996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return i}});var n=r(52263),o=r(13919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,l=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(c)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+u:u}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},56728:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return m},default:function(){return h}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i=r(44996),c=["components"],s={title:"Nocalhost v0.5.6 \u53d1\u5e03",author:"Anur",author_title:"Backend engineer at Nocalhost Team",author_url:"https://github.com/anurnomeru",author_image_url:"https://avatars.githubusercontent.com/u/24870621?v=4",tags:["Announcement"]},l=void 0,u={permalink:"/zh-CN/blog/0.5.6",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/0.5.6.md",title:"Nocalhost v0.5.6 \u53d1\u5e03",description:"Nocalhost v0.5.6\u5df2\u7ecf\u53d1\u5e03\uff0c\u6211\u4eec\u5df2\u7ecf\u4fee\u590d\u4e86\u4e00\u4e9b\u7f3a\u9677\uff0c\u63d0\u9ad8\u4e86\u6027\u80fd\u5e76\u6dfb\u52a0\u4e86\u4e00\u4e9b\u65b0\u529f\u80fd\u3002",date:"2021-10-28T06:06:54.273Z",formattedDate:"2021\u5e7410\u670828\u65e5",tags:[{label:"Announcement",permalink:"/zh-CN/blog/tags/announcement"}],readingTime:.67,truncated:!1,authors:[{name:"Anur",title:"Backend engineer at Nocalhost Team",url:"https://github.com/anurnomeru",imageURL:"https://avatars.githubusercontent.com/u/24870621?v=4"}],prevItem:{title:"Nocalhost \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u6d3b\u52a8",permalink:"/zh-CN/blog/docs-translate"},nextItem:{title:"How to debug microservices in Kubernetes with proxy, sidecar or service mesh?",permalink:"/zh-CN/blog/2021/07/05/jimmy"}},p={authorsImageUrls:[void 0]},m=[{value:"\u6709\u54ea\u4e9b\u65b0\u7279\u6027\uff1f",id:"\u6709\u54ea\u4e9b\u65b0\u7279\u6027\uff1f",children:[{value:"\u652f\u6301\u5728 JetBrains \u4e2d\u4f7f\u7528 Node.js \u7684\u8fdc\u7a0b Run/Debug \u548c HotReload",id:"\u652f\u6301\u5728-jetbrains-\u4e2d\u4f7f\u7528-nodejs-\u7684\u8fdc\u7a0b-rundebug-\u548c-hotreload",children:[]},{value:"\u652f\u6301\u5728 JetBrain \u63d2\u4ef6\u4e2d\u4f7f\u7528 HotReload",id:"\u652f\u6301\u5728-jetbrain-\u63d2\u4ef6\u4e2d\u4f7f\u7528-hotreload",children:[]},{value:"Nocalhost Server \u7684\u4e3b\u8981\u66f4\u65b0",id:"nocalhost-server-\u7684\u4e3b\u8981\u66f4\u65b0",children:[]},{value:"\u652f\u6301\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u4fdd\u5b58 Nocalhost \u914d\u7f6e",id:"\u652f\u6301\u5728-kubernetes-\u96c6\u7fa4\u4e2d\u4fdd\u5b58-nocalhost-\u914d\u7f6e",children:[]}]},{value:"\u5176\u4ed6\u66f4\u65b0",id:"\u5176\u4ed6\u66f4\u65b0",children:[]}],d={toc:m};function h(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nocalhost v0.5.6\u5df2\u7ecf\u53d1\u5e03\uff0c\u6211\u4eec\u5df2\u7ecf\u4fee\u590d\u4e86\u4e00\u4e9b\u7f3a\u9677\uff0c\u63d0\u9ad8\u4e86\u6027\u80fd\u5e76\u6dfb\u52a0\u4e86\u4e00\u4e9b\u65b0\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"\u6709\u54ea\u4e9b\u65b0\u7279\u6027\uff1f"},"\u6709\u54ea\u4e9b\u65b0\u7279\u6027\uff1f"),(0,a.kt)("p",null,"\u6211\u4eec\u6700\u8fd1\u53d1\u5e03\u4e86\u56db\u4e2a\u6bd4\u8f83\u91cd\u8981\u7684\u529f\u80fd\uff1a"),(0,a.kt)("h3",{id:"\u652f\u6301\u5728-jetbrains-\u4e2d\u4f7f\u7528-nodejs-\u7684\u8fdc\u7a0b-rundebug-\u548c-hotreload"},"\u652f\u6301\u5728 JetBrains \u4e2d\u4f7f\u7528 Node.js \u7684\u8fdc\u7a0b Run/Debug \u548c HotReload"),(0,a.kt)("p",null,"Nocalhos \u73b0\u5728\u5df2\u7ecf\u652f\u6301 JetBrains \u4e2d\u4f7f\u7528 Node.js \u8fdc\u7a0b\u8fd0\u884c\u3001\u8c03\u8bd5\u548c\u5b9e\u65f6\u70ed\u52a0\u8f7d"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/guides/debug/remote-debug"},"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u914d\u7f6e Node.js \u8fdc\u7a0b\u8c03\u8bd5")),(0,a.kt)("h3",{id:"\u652f\u6301\u5728-jetbrain-\u63d2\u4ef6\u4e2d\u4f7f\u7528-hotreload"},"\u652f\u6301\u5728 JetBrain \u63d2\u4ef6\u4e2d\u4f7f\u7528 HotReload"),(0,a.kt)("p",null,"Nocalhost \u73b0\u5728\u652f\u6301\u5728 JetBrains \u4e2d\u4ee5 HotReload \u7684\u65b9\u5f0f\u8fdb\u884c\u8fd0\u884c\u6216\u8c03\u8bd5\u3002 \u5f53\u542f\u7528\u6b64\u529f\u80fd\u65f6\uff0c Nocalhost \u5c06\u76d1\u6d4b\u5b9e\u65f6\u6587\u4ef6\u66f4\u6539\uff0c\u5e76\u5728\u5f00\u53d1\u6216\u8fdc\u7a0b\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u91cd\u65b0\u6267\u884c\u914d\u7f6e\u597d\u7684\u8fd0\u884c/\u8c03\u8bd5\u547d\u4ee4\u3002 ",(0,a.kt)("iframe",{width:"100%",height:"600",src:"//player.bilibili.com/player.html?aid=335688273&bvid=BV1sR4y1p7RM&cid=415232002&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",mark:"crwd-mark"}," ")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/guides/hot-reload"},"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u914d\u7f6e HotReload")),(0,a.kt)("h3",{id:"nocalhost-server-\u7684\u4e3b\u8981\u66f4\u65b0"},"Nocalhost Server \u7684\u4e3b\u8981\u66f4\u65b0"),(0,a.kt)("h4",{id:"\u65b0\u7684-ui-\u7cfb\u7edf"},"\u65b0\u7684 UI \u7cfb\u7edf"),(0,a.kt)("p",null,"\u6211\u4eec\u6253\u9020\u4e86\u4e00\u5957\u5168\u65b0\u7684 Nocalhost Server UI \u7cfb\u7edf\u3002"),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/server/dashboard.gif")})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/server/deploy-server"},"\u5c1d\u8bd5\u6211\u4eec\u6700\u65b0\u7248 Nocalhost Sever")),(0,a.kt)("h4",{id:"meshspace"},"MeshSpace"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MeshSpace")," \u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio"),"\uff0c\u5141\u8bb8\u4f60\u901a\u8fc7\u6307\u5b9a\u72ec\u7acb\u8def\u7531\u7684 Header \u6765\u5171\u4eab\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/server/mesh-space.svg")})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/server/manage-devspace-mesh"},"\u8fdb\u4e00\u6b65\u4e86\u89e3 MeshSpace")),(0,a.kt)("h4",{id:"\u652f\u6301\u5171\u4eab-kubernetes-namespace"},"\u652f\u6301\u5171\u4eab Kubernetes namespace"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Nocalhost Server \u8f7b\u677e\u5730\u4e0e\u56e2\u961f\u4e2d\u7684\u4efb\u4f55\u4eba\u5206\u4eab\u4f60\u7684 Kubernetes namespace\u3002"),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/server/share.svg")})),(0,a.kt)("h3",{id:"\u652f\u6301\u5728-kubernetes-\u96c6\u7fa4\u4e2d\u4fdd\u5b58-nocalhost-\u914d\u7f6e"},"\u652f\u6301\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u4fdd\u5b58 Nocalhost \u914d\u7f6e"),(0,a.kt)("p",null,"\u4f60\u73b0\u5728\u53ef\u4ee5\u8f7b\u677e\u5730\u4e0e\u4f7f\u7528\u76f8\u540c\u7684 Kubernetes \u96c6\u7fa4\u7684\u4efb\u4f55\u4eba\u5171\u4eab\u4f60\u7684 Nocalhost \u914d\u7f6e\u3002"),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/config/share-config.png")})),(0,a.kt)("h2",{id:"\u5176\u4ed6\u66f4\u65b0"},"\u5176\u4ed6\u66f4\u65b0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/changelogs/0.5.x#056-2021-09-16"},"\u9605\u8bfb Nocalhost v0.5.6 \u7684\u5b8c\u6574\u66f4\u65b0\u65e5\u5fd7")))}h.isMDXComponent=!0}}]);