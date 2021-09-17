"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9186],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3022:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),i=["components"],c={title:"Dev Container configuration"},l=void 0,s={unversionedId:"config/config-dev-container",id:"config/config-dev-container",isDocsHomePage:!1,title:"Dev Container configuration",description:"Overview / Spec / Container",source:"@site/docs/config/config-dev-container.md",sourceDirName:"config",slug:"/config/config-dev-container",permalink:"/docs/config/config-dev-container",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-dev-container.md",tags:[],version:"current",lastUpdatedBy:"anurnomeru",lastUpdatedAt:1631719830,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Dev Container configuration"},sidebar:"docs",previous:{title:"Spec",permalink:"/docs/config/config-spec"},next:{title:"Enhance configuration",permalink:"/docs/config/config-enhance"}},p=[{value:"\u5f00\u53d1\u955c\u50cf",id:"\u5f00\u53d1\u955c\u50cf",children:[]},{value:"\u5728\u8fdc\u7aef\u5bb9\u5668\u4f7f\u7528\u4ec0\u4e48 Shell",id:"\u5728\u8fdc\u7aef\u5bb9\u5668\u4f7f\u7528\u4ec0\u4e48-shell",children:[]},{value:"\u5f00\u53d1\u5bb9\u5668\u6301\u4e45\u5316",id:"\u5f00\u53d1\u5bb9\u5668\u6301\u4e45\u5316",children:[]},{value:"\u5f00\u53d1\u5bb9\u5668\u7684\u8d44\u6e90\u7684\u7533\u8bf7\u4e0e\u9650\u5236",id:"\u5f00\u53d1\u5bb9\u5668\u7684\u8d44\u6e90\u7684\u7533\u8bf7\u4e0e\u9650\u5236",children:[]}],m={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/config/config"},"Overview")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-spec"},"Spec")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-dev-container"},"Container")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u5f00\u53d1\u955c\u50cf"},"\u5f00\u53d1\u955c\u50cf"),(0,o.kt)("p",null,"\u8303\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh\n")),(0,o.kt)("p",null,"\u5f00\u53d1\u955c\u50cf\u662f\u5f00\u53d1\u6a21\u5f0f\u5de5\u4f5c\u7684\u57fa\u77f3\uff0c\u53ef\u4ee5\u7b80\u5355\u8ba4\u4e3a\u662f\u4e00\u4e2a\u8fdc\u7a0b\u7684 linux\uff0c\u672c\u5730\u540c\u6b65\u4e0a\u53bb\u7684\u6587\u4ef6\u5982\u679c\u60f3\u8981\u6b63\u786e\u7684\u7f16\u8bd1\u3001\u8fd0\u884c\u7b49\uff0c\u5fc5\u987b\u914d\u5408\u5408\u9002\u7684\u5f00\u53d1\u955c\u50cf\u3002Nocalhost \u5b98\u65b9\u63d0\u4f9b\u4e86\u591a\u4e2a\u5f00\u53d1\u955c\u50cf\uff0c\u5982\u679c\u4f60\u6ca1\u6709\u914d\u7f6e\u8fd9\u4e2a\u5b57\u6bb5\u5c31\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\uff0c\u6211\u4eec\u4f1a\u8981\u6c42\u4f60\u9009\u62e9\u6216\u586b\u5165\u4e00\u4e2a\u5f00\u53d1\u955c\u50cf\u4ee5\u7ee7\u7eed\u3002"),(0,o.kt)("p",null,"\u5b98\u65b9\u7684\u5f00\u53d1\u955c\u50cf\u6ca1\u6709\u4ec0\u4e48\u7279\u6b8a\u7684\u9b54\u6539\uff0c\u5c31\u662f\u4e00\u4e2a\u666e\u901a\u7684\u955c\u50cf\u3002\u9664\u4e86\u5404\u4e2a\u8bed\u8a00\u7684\u57fa\u672c\u73af\u5883\uff0c\u5982 Java \u7684 JRE\u3001Maven \u7b49\uff0c\u8fd8\u5185\u7f6e\u4e86\u4e00\u4e9b\u5982 git\u3001openssh-client\u3001zsh\u3001bash\u3001net-tools\u3001tmux \u7b49\u57fa\u672c\u8f6f\u4ef6\u3002\u5982\u679c\u5b98\u65b9\u7684\u5f00\u53d1\u955c\u50cf\u4e0d\u5408\u9002\uff0c\u4f60\u53ef\u4ee5\u968f\u610f\u7684\u5b9a\u5236\u81ea\u5df1\u7684\u5f00\u53d1\u955c\u50cf\uff0c\u6211\u4eec\u7684 DockerFile \u653e\u7f6e\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nocalhost/dev-container"},"dev-container"),"\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u81ea\u5236\u5f00\u53d1\u955c\u50cf")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u5b9a\u5236\u4e86\u81ea\u5df1\u7684\u5f00\u53d1\u955c\u50cf\uff0c\u8bf7\u5c06\u5b83\u653e\u7f6e\u5728\u4e00\u4e2a\u4f60\u6240\u4f7f\u7528\u7684 K8s \u96c6\u7fa4\u53ef\u62c9\u53d6\u5230\u7684\u4ed3\u5e93\u3002"))),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u5728\u8fdc\u7aef\u5bb9\u5668\u4f7f\u7528\u4ec0\u4e48-shell"},"\u5728\u8fdc\u7aef\u5bb9\u5668\u4f7f\u7528\u4ec0\u4e48 Shell"),(0,o.kt)("p",null,"\u8303\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      shell: /bin/zsh\n")),(0,o.kt)("p",null,"\u53ef\u4e0d\u8fdb\u884c\u914d\u7f6e\uff0c\u9ed8\u8ba4\u503c\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"zsh || bash || sh"),"\u3002\u4f7f\u7528\u4fbf\u6377\u6613\u7528\u7684 Shell \u5f80\u5f80\u80fd\u4e8b\u534a\u529f\u500d\uff0c\u5982\u5e26\u6709\u81ea\u52a8\u8865\u5168\u3001\u5386\u53f2\u8bb0\u5f55\u8865\u5168\u7684 zsh\u3002"),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u5177\u4f53\u652f\u6301\u4ec0\u4e48 Shell \u4f9d\u6258\u4e8e ",(0,o.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u955c\u50cf")," \u672c\u8eab\uff0c\u5982\u679c\u4f60\u7684 ",(0,o.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u955c\u50cf")," \u4e0d\u652f\u6301 zsh\uff0c\u8fd9\u91cc\u5373\u4f7f\u914d\u7f6e\u4e86 zsh \u4e5f\u6ca1\u6709\u4f5c\u7528\uff0c\u5b83\u4f1a\u4f9d\u6b21\u5bfb\u627e zsh\u3001bash \u4ee5\u53ca sh\uff0c\u76f4\u5230\u627e\u5230\u53ef\u7528\u7684 Shell\u3002"),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u5f00\u53d1\u5bb9\u5668\u6301\u4e45\u5316"},"\u5f00\u53d1\u5bb9\u5668\u6301\u4e45\u5316"),(0,o.kt)("p",null,"\u8303\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      persistentVolumeDirs:\n        - path: /the/path/you/want/to/persistent/in/container\n          capacity: 10Gi\n        - path: /other\n          capacity: 10Gi\n      storageClass: cbs\n")),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053\uff0cK8s \u5bb9\u5668\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u5bf9\u76ee\u5f55\u8fdb\u884c\u6301\u4e45\u5316\uff0c\u5728\u5bb9\u5668\u505c\u6b62\u6216\u91cd\u542f\u540e\uff0c\u539f\u5148\u4ea7\u751f\u7684\u6570\u636e\u5c06\u4f1a\u4e22\u5931\uff0c\u4f8b\u5982\u5df2\u7ecf\u540c\u6b65\u4e0a\u53bb\u7684\u6587\u4ef6\u3001\u7f16\u8bd1\u4ea7\u7269\u3001\u6784\u5efa\u4ea7\u7269\u7b49\u7b49\u3002\u5728\u5f00\u53d1\u5bb9\u5668\u4e2d\u542f\u7528\u6301\u4e45\u5316\uff0c\u53ef\u4ee5\u5927\u5927\u51cf\u5c11\u4e0a\u8ff0\u8fd9\u4e9b\u65f6\u95f4\u7684\u635f\u8017\u3002"),(0,o.kt)("p",null,"\u6301\u4e45\u5316\u5305\u62ec\u4e24\u90e8\u5206\u914d\u7f6e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u662f\u54ea\u4e9b\u76ee\u5f55\u9700\u8981\u88ab\u6301\u4e45\u5316\uff0c\u53ef\u4e0d\u8fdb\u884c\u914d\u7f6e\uff0c\u9ed8\u8ba4\u503c\u4e3a\u7a7a\uff0cpath \u4e3a\u5f00\u53d1\u955c\u50cf\u4e2d\u9700\u8981\u6301\u4e45\u5316\u7684\u76ee\u5f55\uff0ccapacity \u4e3a\u6b64\u76ee\u5f55\u6301\u4e45\u5316\u5206\u914d\u7684\u7a7a\u95f4\uff0cpersistentVolumeDirs \u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u53ef\u914d\u7f6e\u591a\u4e2a path/capacity\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53e6\u4e00\u4e2a\u662f storageClass\u3002")),(0,o.kt)("p",null,"\u6301\u4e45\u5316\u9700\u8981\u501f\u52a9 storageclass \u7684\u80fd\u529b\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get storageclass "),"\uff09\uff0c\u5982\u679c\u6ca1\u6709\u914d\u7f6e storageClass\uff0cNocalhost \u5c06\u4f1a\u4f7f\u7528\u96c6\u7fa4\u4e2d\u9ed8\u8ba4\u7684 storageclass \u6765\u8fdb\u884c PVC \u7684\u521b\u5efa\u3002\u53cd\u4e4b\uff0c\u5219\u4f7f\u7528\u6307\u5b9a\u7684 storageClass \u6765\u8fdb\u884c\u521b\u5efa\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"capacity \u9700\u8981\u7b26\u5408 K8s \u5bf9\u8d44\u6e90\u9650\u5b9a\u7684\u7ea6\u5b9a\u3002"))),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u5f00\u53d1\u5bb9\u5668\u7684\u8d44\u6e90\u7684\u7533\u8bf7\u4e0e\u9650\u5236"},"\u5f00\u53d1\u5bb9\u5668\u7684\u8d44\u6e90\u7684\u7533\u8bf7\u4e0e\u9650\u5236"),(0,o.kt)("p",null,"\u8303\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      resources:\n        limits:\n          memory: 4Gi\n          cpu: "1"\n        requests:\n          memory: 2Gi\n          cpu: "0.5"\n')),(0,o.kt)("p",null,"Nocalhost \u5bf9\u5f00\u53d1\u5bb9\u5668\u7684\u8d44\u6e90\u8bbe\u7f6e\u7ee7\u627f\u81ea\u539f\u5bb9\u5668\uff0c\u5982\u679c\u539f\u5bb9\u5668\u6ca1\u6709\u914d\u7f6e\uff0cnamespace \u4e2d\u4e5f\u6ca1\u6709\u8bbe\u7f6e\u5bf9\u5e94\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"limitranges")," \uff08",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get limitranges"),"\uff09\uff0c\u90a3\u4e48\u5f00\u53d1\u5bb9\u5668\u5c06\u5f00\u53d1\u5bb9\u5668\u7684\u8d44\u6e90\u9650\u5236\u4e3a\u7a7a\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\uff0c\u5728\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u540e\uff0c\u8d44\u6e90\u7684\u7528\u91cf\u4f1a\u8d85\u8fc7\u539f\u955c\u50cf\u3002\u5982\u679c\u539f\u5bb9\u5668\u914d\u7f6e\u4e86\u8d44\u6e90\u76f8\u5173\u7684\u8bbe\u7f6e\uff0c\u5f80\u5f80\u4f1a\u5bfc\u81f4\u5f00\u53d1\u6a21\u5f0f\u65e0\u6cd5\u6b63\u5e38\u8fd0\u8f6c\uff0c\u5982\u5185\u5b58\u4e0d\u591f\u5bfc\u81f4 OOM \u7b49\u3002\u90a3\u4e48\u6b64\u65f6\u5c31\u9700\u8981\u901a\u8fc7\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," \u6765\u63d0\u9ad8\u5f00\u53d1\u955c\u50cf\u6240\u7528\u8d44\u6e90\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"memory \u548c cpu \u9700\u8981\u7b26\u5408 K8s \u5bf9\u8d44\u6e90\u9650\u5b9a\u7684\u7ea6\u5b9a\u3002"))))}d.isMDXComponent=!0}}]);