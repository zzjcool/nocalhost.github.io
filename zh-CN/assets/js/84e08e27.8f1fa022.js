"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8481],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=o.createContext({}),d=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=d(t.components);return o.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=d(n),k=r,m=p["".concat(u,".").concat(k)]||p[k]||s[k]||l;return n?o.createElement(m,a(a({ref:e},c),{},{components:n})):o.createElement(m,a({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,a=new Array(l);a[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3775:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var o=n(2122),r=n(9756),l=(n(7294),n(3905)),a=["components"],i={},u="Hot Reload",d={unversionedId:"guides/hot-reload",id:"guides/hot-reload",isDocsHomePage:!1,title:"Hot Reload",description:"What is Hot-Reload?",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/hot-reload.md",sourceDirName:"guides",slug:"/guides/hot-reload",permalink:"/zh-CN/docs/guides/hot-reload",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Remote Run",permalink:"/zh-CN/docs/guides/remote-run"},next:{title:"Overview",permalink:"/zh-CN/docs/config/config"}},c=[{value:"What is Hot-Reload?",id:"what-is-hot-reload",children:[]},{value:"Supported IDEs",id:"supported-ides",children:[]},{value:"How to enable Hot-Reload?",id:"how-to-enable-hot-reload",children:[{value:"Sample Configuration",id:"sample-configuration",children:[]}]}],s={toc:c};function p(t){var e=t.components,n=(0,r.Z)(t,a);return(0,l.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hot-reload"},"Hot Reload"),(0,l.kt)("h2",{id:"what-is-hot-reload"},"What is Hot-Reload?"),(0,l.kt)("p",null,"The files you modify in the IDE will be synchronized to the remote container in real time, and your Run/Debug command will be re-executed."),(0,l.kt)("h2",{id:"supported-ides"},"Supported IDEs"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Language"),(0,l.kt)("th",null,"IDE"),(0,l.kt)("th",null,"Edition"),(0,l.kt)("th",null,"Required Plugin")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Java"),(0,l.kt)("td",null,"IntelliJ IDEA"),(0,l.kt)("td",null,"Ultimate"),(0,l.kt)("td",null,"N/A")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"2"},"Go"),(0,l.kt)("td",null,"IntelliJ IDEA"),(0,l.kt)("td",null,"Ultimate"),(0,l.kt)("td",null,"Go plugin")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"GoLand"),(0,l.kt)("td",null,"Professional"),(0,l.kt)("td",null,"N/A")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"2"},"Python"),(0,l.kt)("td",null,"IntelliJ IDEA"),(0,l.kt)("td",null,"Ultimate"),(0,l.kt)("td",null,"Python plugin")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"PyCharm"),(0,l.kt)("td",null,"Professional"),(0,l.kt)("td",null,"N/A")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"2"},"PHP"),(0,l.kt)("td",null,"IntelliJ IDEA"),(0,l.kt)("td",null,"Ultimate"),(0,l.kt)("td",null,"PHP plugin")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"PhpStorm"),(0,l.kt)("td",null,"Professional"),(0,l.kt)("td",null,"N/A")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"2"},"Node.js"),(0,l.kt)("td",null,"IntelliJ IDEA"),(0,l.kt)("td",null,"Ultimate"),(0,l.kt)("td",null,"N/A")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"WebStorm"),(0,l.kt)("td",null,"Professional"),(0,l.kt)("td",null,"N/A")))),(0,l.kt)("h2",{id:"how-to-enable-hot-reload"},"How to enable Hot-Reload?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Select the workload that you want to Run/Debug"),(0,l.kt)("li",{parentName:"ol"},"Right-click the workload and select ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Dev Config")),", configure ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"hotReload: true")))),(0,l.kt)("h3",{id:"sample-configuration"},"Sample Configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{15} title="Nocalhost Configs"',"{15}":!0,title:'"Nocalhost','Configs"':!0},'name: java-remote-run\nserviceType: deployment\ncontainers:\n  - name: "reviews"\n    dev:\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:latest\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          debug:\n            - ./gradlew\n            - bootRun\n            - --debug-jvm\n            - --no-daemon\n        hotReload: true\n        debug:\n          remoteDebugPort: 5005\n\n')))}p.isMDXComponent=!0}}]);