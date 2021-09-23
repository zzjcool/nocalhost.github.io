"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3902],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,u=m["".concat(s,".").concat(g)]||m[g]||c[g]||o;return n?i.createElement(u,r(r({ref:t},d),{},{components:n})):i.createElement(u,r({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return r}});var i=n(2263),a=n(3919);function o(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,r=o.forcePrependBaseUrl,l=void 0!==r&&r,s=o.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+d:d}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},6613:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return c},toc:function(){return m},default:function(){return u}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),r=n(4996),l=["components"],s={title:"Developing APISIX Ingress Controller with Nocalhost in Kubernetes",author:"Garry Chen",author_title:"Product Manager at Nocalhost Team",author_url:"https://github.com/neaped",author_image_url:"https://avatars.githubusercontent.com/u/3713305?v=4",tags:["Kubernetes","APISIX","Controller","Development"]},p=void 0,d={permalink:"/zh-CN/blog/api-six",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/api-six.md",title:"Developing APISIX Ingress Controller with Nocalhost in Kubernetes",description:"Introduction",date:"2021-09-23T07:28:49.971Z",formattedDate:"2021\u5e749\u670823\u65e5",tags:[{label:"Kubernetes",permalink:"/zh-CN/blog/tags/kubernetes"},{label:"APISIX",permalink:"/zh-CN/blog/tags/apisix"},{label:"Controller",permalink:"/zh-CN/blog/tags/controller"},{label:"Development",permalink:"/zh-CN/blog/tags/development"}],readingTime:6.875,truncated:!1,authors:[{name:"Garry Chen",title:"Product Manager at Nocalhost Team",url:"https://github.com/neaped",imageURL:"https://avatars.githubusercontent.com/u/3713305?v=4"}],nextItem:{title:"Nocalhost \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u6d3b\u52a8",permalink:"/zh-CN/blog/docs-translate"}},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy APISIX Ingress Controller",id:"deploy-apisix-ingress-controller",children:[]},{value:"Developing",id:"developing",children:[{value:"Step 1. Add Nocalhost configuration",id:"step-1-add-nocalhost-configuration",children:[]},{value:"Step 2. Start development mode",id:"step-2-start-development-mode",children:[]},{value:"Step 3. Change code and check result",id:"step-3-change-code-and-check-result",children:[]},{value:"Step 4. End development mode",id:"step-4-end-development-mode",children:[]}]},{value:"Debugging",id:"debugging",children:[{value:"Step 1. Add Configuration",id:"step-1-add-configuration",children:[]},{value:"Step 2. Add debugging commands",id:"step-2-add-debugging-commands",children:[]},{value:"Step 3. Start remote debugging",id:"step-3-start-remote-debugging",children:[]},{value:"Step 4. Step through breakpoints",id:"step-4-step-through-breakpoints",children:[]}]},{value:"Remote Run",id:"remote-run",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"References",id:"references",children:[]}],g={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/blog/apisix/apisix-banner.png")})),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This article walks you through using Nocalhost to seamlessly connect your local development machine to a remote Kubernetes cluster, allowing you to use your favourite IDE to develop and debug ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/getting-started"},"Apache APISIX ingress controller"),". Giving you the ability to comfortably develop and debug your remote apps with your existing skills."),(0,o.kt)("p",null,"This article covers:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#deploy-apisix-ingress-controller"},"Deploy the APISIX Ingress controller")," to the remote Kubernetes cluster within IDE"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#developing"},"Developing")," and ",(0,o.kt)("a",{parentName:"li",href:"#debugging"},"debugging")," APISIX ingress controller in Kubernetes without image rebuilding")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation. You can use any Kubernetes clusters that you have namespace admin privilege."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm v3.0+")," installed."),(0,o.kt)("li",{parentName:"ul"},"GoLand IDE 2020.03+ (I am using GoLand 2021.2 in this article)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/installation#install-jetbrains-plugin"},"Install Nocalhost JetBrains plugin")),(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"Go 1.13")," or later")),(0,o.kt)("h2",{id:"deploy-apisix-ingress-controller"},"Deploy APISIX Ingress Controller"),(0,o.kt)("p",null,"I'm going to deploy APISIX Ingress Controller by Nocalhost within GoLand:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the Nocalhost plugin within GoLand"),(0,o.kt)("li",{parentName:"ol"},"Use the cluster inspector to select the namespace that you want to deploy."),(0,o.kt)("li",{parentName:"ol"},"Right-click the selected namespace, choose ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Deploy Application")),", and select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Helm Repo"))," as installation method."),(0,o.kt)("li",{parentName:"ol"},"In the following dialog box, input",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," as ",(0,o.kt)("inlineCode",{parentName:"li"},"Name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://charts.apiseven.com")," as ",(0,o.kt)("inlineCode",{parentName:"li"},"Chart URL"))))),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/blog/apisix/apisix-ingress-deploy.gif")}),(0,o.kt)("figcaption",null,"Deploy APISIX ingress controller")),(0,o.kt)("p",null,"Let's test the ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," after deployment by enable the port-forwarding within IDE:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find the ",(0,o.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," workload in the cluster inspector, right-click and select the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Port Forward"))),(0,o.kt)("li",{parentName:"ol"},"Add the port-forwarding ",(0,o.kt)("inlineCode",{parentName:"li"},"8080:8080")),(0,o.kt)("li",{parentName:"ol"},"Visiting the ",(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:8080/healthz"},(0,o.kt)("inlineCode",{parentName:"a"},"http://127.0.0.1:8080/healthz"))," in local and check the result")),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/blog/apisix/apisix-ingress-test.gif")}),(0,o.kt)("figcaption",null,"Test the deployment")),(0,o.kt)("h2",{id:"developing"},"Developing"),(0,o.kt)("h3",{id:"step-1-add-nocalhost-configuration"},"Step 1. Add Nocalhost configuration"),(0,o.kt)("p",null,"Before we start to develop, we need to add the Nocalhost configuration."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right-click the ",(0,o.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," in Nocalhost's cluster inspector and select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Dev Config"))),(0,o.kt)("li",{parentName:"ol"},"Copy and paste the following Nocalhost configuration to the file just opened. Remember to save it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: apisix-ingress-controller\nserviceType: deployment\ncontainers:\n    - name: apisix-ingress-controller\n      dev:\n          gitUrl: https://github.com/apache/apisix-ingress-controller.git\n          image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:1.16\n          shell: ""\n          workDir: /home/nocalhost-dev\n          resources: null\n          portForward:\n              - 8080:8080\n')),(0,o.kt)("h4",{id:"what-did-i-configure"},"What did I configure?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We deployed a development workload called ",(0,o.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")),(0,o.kt)("li",{parentName:"ul"},"When starting development mode, Nocalhost will:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"use the image ",(0,o.kt)("inlineCode",{parentName:"li"},"codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:1.16")," to start the development container"),(0,o.kt)("li",{parentName:"ul"},"After entering development mode, Nocalhost will open the terminal and start the ",(0,o.kt)("inlineCode",{parentName:"li"},"/bin/sh")," by default (as ",(0,o.kt)("a",{parentName:"li",href:"/docs/config/config-dev#devshell"},(0,o.kt)("inlineCode",{parentName:"a"},"dev.shell"))," is empty) and entering the ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/nocalhost-dev")," folder."))),(0,o.kt)("li",{parentName:"ul"},"There is no ",(0,o.kt)("inlineCode",{parentName:"li"},"resources")," limitation for this development container"),(0,o.kt)("li",{parentName:"ul"},"Nocalhost will forward the ",(0,o.kt)("inlineCode",{parentName:"li"},"8080")," port of the development container to the local computer's ",(0,o.kt)("inlineCode",{parentName:"li"},"8080")," port")),(0,o.kt)("h3",{id:"step-2-start-development-mode"},"Step 2. Start development mode"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right-click the deployment ",(0,o.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," in cluster inspector, select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Start DevMode"))),(0,o.kt)("li",{parentName:"ol"},"Choose your source code directory if you have already cloned in local, or let Nocalhost clone the source code for you by entering the ",(0,o.kt)("strong",{parentName:"li"},"apache/apisix-ingress-controller")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller.git"},"repository URL")),(0,o.kt)("li",{parentName:"ol"},"Wait for the operations, Nocalhost will open the remote terminal within IDE after entering DevMode")),(0,o.kt)("p",null,"Now start the ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," process by entering the following command in the remote terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go run main.go ingress --config-path conf/config-default.yaml\n")),(0,o.kt)("p",null,"After the ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," has started, access the service by visiting ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/healthz"},(0,o.kt)("inlineCode",{parentName:"a"},"http://127.0.0.1:8080/healthz"))," on local and check the result."),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/blog/apisix/apisix-ingress-devmode.gif")}),(0,o.kt)("figcaption",null,"Entering DevMode")),(0,o.kt)("h3",{id:"step-3-change-code-and-check-result"},"Step 3. Change code and check result"),(0,o.kt)("p",null,"Now I will make some code changes and check the result."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop the ",(0,o.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," process"),(0,o.kt)("li",{parentName:"ol"},"Search ",(0,o.kt)("inlineCode",{parentName:"li"},"healthz")," and find the ",(0,o.kt)("inlineCode",{parentName:"li"},"router.go")," file. Change the ",(0,o.kt)("inlineCode",{parentName:"li"},"healthzResponse")," status code from ",(0,o.kt)("inlineCode",{parentName:"li"},"ok")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Hello Nocalhost")),(0,o.kt)("li",{parentName:"ol"},"Start the process again and check the change result in local")),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/blog/apisix/apisix-ingress-code-change.gif")}),(0,o.kt)("figcaption",null,"\u2b50\ufe0f \xa0 No need to rebuild image or restart container, see result under seconds \xa0 \u2b50\ufe0f ")),(0,o.kt)("h3",{id:"step-4-end-development-mode"},"Step 4. End development mode"),(0,o.kt)("p",null,"Now close the development window and end development mode."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right-click the ",(0,o.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," in the cluster inspector"),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"End DevMode")))),(0,o.kt)("p",null,"Nocalhost will make ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," end development mode, and reset the ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," Pod to its original version. Enable the port-forwarding and check the result after ending development mode."),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/blog/apisix/apisix-ingress-end-devmode.gif")}),(0,o.kt)("figcaption",null,"Ending DevMode")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Code Change")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All code changes in development mode will ",(0,o.kt)("strong",{parentName:"p"},"only take effect")," in the development container."),(0,o.kt)("p",{parentName:"div"},"After exiting the development mode, Nocalhost will reset the remote container to its original state (before the code is modified). In this way, after exiting the development mode, the modification of the code will ",(0,o.kt)("strong",{parentName:"p"},"not")," cause any changes or impact on the original environment."))),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"Debugging an application is not easy, and debugging an application in the Kubernetes cluster is even more difficult. Nocalhost is here to help by providing the same debugging experience you're used in the IDE when debugging in the remote Kubernetes cluster."),(0,o.kt)("h3",{id:"step-1-add-configuration"},"Step 1. Add Configuration"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Exit DevMode")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember to exit the development mode before applying the new configuration. Nocalhost will use the latest configuration the next time you enter development mode."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#step-1-add-nocalhost-configuration"},"Open the Nocalhost configuration")," and add remote debugging configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{11-16}","{11-16}":!0},'name: apisix-ingress-controller\nserviceType: deployment\ncontainers:\n    - name: apisix-ingress-controller\n      dev:\n          gitUrl: https://github.com/apache/apisix-ingress-controller.git\n          image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:1.16\n          shell: ""\n          workDir: /home/nocalhost-dev\n          resources: null\n          command:\n              debug:\n                - ./debug.sh\n          debug:\n              remoteDebugPort: 9009\n          hotReload: true\n          portForward:\n              - 8080:8080\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"dev.command.debug"),":")," the commands that Nocalhost will run when debugging remotely. I'm using a bash shell script file ",(0,o.kt)("inlineCode",{parentName:"li"},"debug.sh"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"dev.debug.remoteDebugPort"),":")," the local port that Nocalhost will forward the remote debugging port data to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"dev.hotReload"),":")," when Nocalhost detects file changes, it will automatically execute the defined command in ",(0,o.kt)("inlineCode",{parentName:"li"},"debug.sh")," without losing the state of app.")),(0,o.kt)("h3",{id:"step-2-add-debugging-commands"},"Step 2. Add debugging commands"),(0,o.kt)("p",null,"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"debug.sh")," file with the following shell scripts in your ",(0,o.kt)("strong",{parentName:"p"},"source code directory"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="debug.sh"',title:'"debug.sh"'},"#! /bin/sh\n\n# Only add this if you are in China\nexport GOPROXY=https://goproxy.cn\n\n# The debug scripts\ndlv --headless --log --listen=:9009 --api-version=2 --accept-multiclient debug main.go -- ingress --config-path conf/config-default.yaml\n")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Delve")," listening port needs to be the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"remoteDebugPort")," in the configuration."))),(0,o.kt)("h3",{id:"step-3-start-remote-debugging"},"Step 3. Start remote debugging"),(0,o.kt)("p",null,"After adding configuration and shell file, we can start remote debugging:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right-click ",(0,o.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," and choose ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remote Debug"))),(0,o.kt)("li",{parentName:"ol"},"Nocalhost will put ",(0,o.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," into development mode and start the scripts in ",(0,o.kt)("inlineCode",{parentName:"li"},"debug.sh")," automatically")),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/blog/apisix/apisix-ingress-remote-debug.gif")}),(0,o.kt)("figcaption",null,"Start remote debugging")),(0,o.kt)("h3",{id:"step-4-step-through-breakpoints"},"Step 4. Step through breakpoints"),(0,o.kt)("p",null,"Now set a breakpoint on the ",(0,o.kt)("inlineCode",{parentName:"p"},"healthz")," function. Hover over just to the left of the line number and click on the red dot. Once it\u2019s set, visit ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/healthz"},(0,o.kt)("inlineCode",{parentName:"a"},"http://127.0.0.1:8080/healthz"))," in your local browser, GoLand should pop to the foreground. Click the play button to close the request and the progress should continue loading."),(0,o.kt)("p",null,"In addition, as I enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev.hotReload"),", so every time you make the code change, Nocalhost will automatically re-run the scripts in ",(0,o.kt)("inlineCode",{parentName:"p"},"debug.sh"),". This is very useful when you make the code change and debug again."),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/blog/apisix/apisix-ingress-break-reload.gif")}),(0,o.kt)("figcaption",null,"Setting up breakpoints and run the service")),(0,o.kt)("h2",{id:"remote-run"},"Remote Run"),(0,o.kt)("p",null,"Not just remote debugging, Nocalhost also provides an easy way to run your Go service in the Kubernetes cluster, plus hot reload!"),(0,o.kt)("p",null,"Similar to remote debugging, add the following Nocalhost configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{11-13,19}","{11-13,19}":!0},'name: apisix-ingress-controller\nserviceType: deployment\ncontainers:\n    - name: apisix-ingress-controller\n      dev:\n          gitUrl: https://github.com/apache/apisix-ingress-controller.git\n          image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:1.16\n          shell: ""\n          workDir: /home/nocalhost-dev\n          resources: null\n          command:\n              run:\n                - ./run.sh\n              debug:\n                - ./debug.sh\n          debug:\n              remoteDebugPort: 9009\n          hotReload: true\n          portForward:\n              - 8080:8080\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Exit DevMode")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember to exit DevMode before apply the new Nocalhost configuration."))),(0,o.kt)("p",null,"Then add a ",(0,o.kt)("inlineCode",{parentName:"p"},"run.sh")," file into your source folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="run.sh"',title:'"run.sh"'},"#! /bin/sh\n\n# Execution Scripts\ngo run main.go ingress --config-path conf/config-default.yaml\n")),(0,o.kt)("p",null,"Now you can using the remote run feature by:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right-click ",(0,o.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," in cluster inspector, choose ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remote Run"))),(0,o.kt)("li",{parentName:"ol"},"Nocalhost will put ",(0,o.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," into development mode and start the scripts in ",(0,o.kt)("inlineCode",{parentName:"li"},"run.sh")," automatically")),(0,o.kt)("p",null,"Now every time you make code changes, Nocalhost will automatically trigger the scripts in ",(0,o.kt)("inlineCode",{parentName:"p"},"run.sh"),". You can now enjoy the hot reload for Go without complex configuration."),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/blog/apisix/apisix-ingress-remote-run.gif")}),(0,o.kt)("figcaption",null,"Remote run")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Today, we\u2019ve learned how to use Nocalhost to develop and debug the APISIX ingress controller in Kubernetes.  Now, instead of waiting for slow local development processes, we can iterate quickly with an instant feedback loop and a productive cloud-native development environment."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/getting-started"},"Apache APISIX getting started guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/development"},"Developing for Apache APISIX Ingress Controller"))))}u.isMDXComponent=!0}}]);