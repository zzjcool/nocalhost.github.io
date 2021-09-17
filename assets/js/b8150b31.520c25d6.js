"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[327],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=s(r),d=o,b=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return i}});var n=r(2263),o=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,u=void 0!==i&&i,l=a.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(u)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+c:c}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},738:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=(r(4996),["components"]),u={title:"Developing KubeSphere with Nocalhost in Kubernetes",author:"Garry Chen",author_title:"Product Manager at Nocalhost Team",author_url:"https://github.com/neaped",author_image_url:"https://avatars.githubusercontent.com/u/3713305?v=4",tags:["Kubernetes","KubeSphere","Development"]},l=void 0,s={unversionedId:"practice/pre-release/kubesphere",id:"practice/pre-release/kubesphere",isDocsHomePage:!1,title:"Developing KubeSphere with Nocalhost in Kubernetes",description:"Introduction",source:"@site/docs/practice/pre-release/kubesphere.md",sourceDirName:"practice/pre-release",slug:"/practice/pre-release/kubesphere",permalink:"/docs/practice/pre-release/kubesphere",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/practice/pre-release/kubesphere.md",tags:[{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"KubeSphere",permalink:"/docs/tags/kube-sphere"},{label:"Development",permalink:"/docs/tags/development"}],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1631851916,formattedLastUpdatedAt:"9/17/2021",frontMatter:{title:"Developing KubeSphere with Nocalhost in Kubernetes",author:"Garry Chen",author_title:"Product Manager at Nocalhost Team",author_url:"https://github.com/neaped",author_image_url:"https://avatars.githubusercontent.com/u/3713305?v=4",tags:["Kubernetes","KubeSphere","Development"]}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy KubeSphere",id:"deploy-kubesphere",children:[]},{value:"Develop",id:"develop",children:[]}],p={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This article walks you through using Nocalhost to seamlessly connect your local development machine to a remote Kubernetes cluster, allowing you to use your favourite IDE to develop and debug ",(0,a.kt)("a",{parentName:"p",href:"https://kubesphere.io/"},"KubeSphere"),". Giving you the ability to comfortably develop and debug your remote apps with your existing skills."),(0,a.kt)("p",null,"This article covers:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#deploy-apisix-ingress-controller"},"Deploy the KubeSphere")," to the remote Kubernetes cluster"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#developing"},"Developing")," and ",(0,a.kt)("a",{parentName:"li",href:"#debugging"},"debugging")," KubeSphere service in Kubernetes ")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation. You can use any Kubernetes clusters that you have namespace admin privilege."),(0,a.kt)("li",{parentName:"ul"},"GoLand IDE 2020.03+ (I am using GoLand 2021.2 in this article)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation#install-jetbrains-plugin"},"Install Nocalhost JetBrains plugin")),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"Go 1.13")," or later")),(0,a.kt)("h2",{id:"deploy-kubesphere"},"Deploy KubeSphere"),(0,a.kt)("p",null,"You can follow ",(0,a.kt)("a",{parentName:"p",href:"https://kubesphere.io/docs/quick-start/minimal-kubesphere-on-k8s/"},"Minimal KubeSphere on Kubernetes")," for deployment."),(0,a.kt)("h2",{id:"develop"},"Develop"))}h.isMDXComponent=!0}}]);