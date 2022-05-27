"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[7080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3121:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={title:"Contributing"},s=void 0,u={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"nestjs-query welcomes any contribution!",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/nestjs-query/docs/contributing",editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/contributing.md",tags:[],version:"current",frontMatter:{title:"Contributing"}},p=[{value:"Development Process",id:"development-process",children:[{value:"Bug Reports",id:"bug-reports",children:[],level:3},{value:"Feature Requests",id:"feature-requests",children:[],level:3},{value:"Pull Requests",id:"pull-requests",children:[],level:3}],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Writing Tests",id:"writing-tests",children:[{value:"Unit Tests",id:"unit-tests",children:[],level:3},{value:"E2E Tests",id:"e2e-tests",children:[],level:3}],level:2},{value:"Running Tests",id:"running-tests",children:[{value:"Running Lint",id:"running-lint",children:[],level:3},{value:"Running Unit Tests",id:"running-unit-tests",children:[],level:3},{value:"Running E2E Tests",id:"running-e2e-tests",children:[],level:3},{value:"Running All Tests",id:"running-all-tests",children:[],level:3}],level:2},{value:"Conventional Commits",id:"conventional-commits",children:[],level:2},{value:"Documentation",id:"documentation",children:[{value:"Serving Docs Locally",id:"serving-docs-locally",children:[],level:3},{value:"Creating A New Page",id:"creating-a-new-page",children:[],level:3}],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nestjs-query")," welcomes any contribution!"),(0,r.kt)("p",null,"For all feature, bug and pull requests please adhere to the following ",(0,r.kt)("strong",{parentName:"p"},"golden rule"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Be polite")," - All work on this library is done in contributors free time. Please respect the effort they have put into this library."),(0,r.kt)("h2",{id:"development-process"},"Development Process"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tripss/nestjs-query/issues"},"github issues")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tripss/nestjs-query/pulls"},"pull requests")," to track all bugs and feature. All changes should be reflected in an issue or pull request."),(0,r.kt)("p",null,"As such, you must adhere to the following guidelines."),(0,r.kt)("h3",{id:"bug-reports"},"Bug Reports"),(0,r.kt)("p",null,"Bug reports are essential to the success of this libary, please follow these guidelines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A single bug report per issue",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Multiple bugs per issue makes it difficult to prioritize and track progress.     "),(0,r.kt)("li",{parentName:"ul"},"Contributors will most likely end up splitting your bug report up into multiple fixes, if you can save them some time by splitting your report up beforehand it is greatly appreciated.  "))),(0,r.kt)("li",{parentName:"ul"},"A concise description of the bug",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A clear and concise description of the bug reduces the amount of research required to come to a resolution."))),(0,r.kt)("li",{parentName:"ul"},"A reproducible example ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Without a reproducible example a lot of time can be spent trying to reproduce the reported issue. This will ultimately lead to a prolonged resolution time. If you provide a good example your issue is much more likely to be fixed quickly. ")))),(0,r.kt)("h3",{id:"feature-requests"},"Feature Requests"),(0,r.kt)("p",null,"We're always looking for new feature requests! We ask that you adhere to the following guidelines when issuing a feature request:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A single feature request per issue",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Multiple features per issue makes it difficult to prioritize and track progress.   "),(0,r.kt)("li",{parentName:"ul"},"If you request multiple features in a single issue you may only end up with a partial implementation of all of your request."),(0,r.kt)("li",{parentName:"ul"},"Contributors will most likely end up splitting your feature request up into multiple release, if you can save them some time by splitting your request up beforehand it is greatly appreciated."),(0,r.kt)("li",{parentName:"ul"},"Multiple issues can ultimately look bad for the repository, if 3 out of the 4 requests have been implemented, the issue can still look stale deterring other users from using the libraries. "))),(0,r.kt)("li",{parentName:"ul"},"A concise description of the feature",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A clear and concise description of the feature reduces the amount of back and forth required to come to a decision on the best path forward, ultimately leading to a faster turn around time. "))),(0,r.kt)("li",{parentName:"ul"},"An example use case",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A concrete use case helps in creating tests cases. When included with a good description, the chances of your feature being worked on next increases dramatically.")))),(0,r.kt)("p",null,"Finally, its ok if your feature request gets rejected. You may think your feature is the best, but, it may not fit into the long term vision of the project. It may also be limited by features in other libraries. If your feature gets rejected but you see a clear path forward feel free to issue a PR the chances of it being merged once the work is done is very high as long as you have followed the guidelines laid out below."),(0,r.kt)("h3",{id:"pull-requests"},"Pull Requests"),(0,r.kt)("p",null,"Pull Requests are the best way to contribute to this library. When issuing a pull request you need to follow these guidelines otherwise your PR may not be merged:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A link to the original issue that sparked the change.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If there is not an issue you are addressing please include the details required when issuing a ",(0,r.kt)("a",{parentName:"li",href:"#feature-requests"},"feature request")," or ",(0,r.kt)("a",{parentName:"li",href:"#bug-reports"},"bug report"),"."))),(0,r.kt)("li",{parentName:"ul"},"Write tests!",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tests are essential to the success of this library. All PRs that modify code must include tests to ensure no regressions occur, from external or internal changes. See ",(0,r.kt)("a",{parentName:"li",href:"#writing-tests"},"writing tests"),".     "))),(0,r.kt)("li",{parentName:"ul"},"All tests must pass. See ",(0,r.kt)("a",{parentName:"li",href:"#running-tests"},"running tests")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If your PR does not pass the automated checks it will not be merged.  "))),(0,r.kt)("li",{parentName:"ul"},"All commits must follow the ",(0,r.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits Guidelines"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You should think deeply about your change to determine if it is a breaking change. If it is please include a ",(0,r.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-both--and-breaking-change-footer"},"BREAKING CHANGE")," footer. "))),(0,r.kt)("li",{parentName:"ul"},"Include relevant ",(0,r.kt)("a",{parentName:"li",href:"#documentation"},"docs for new features"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Before you begin writing any new code you will need to run the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install\nnpm run bootstrap\nnpm run build\n")),(0,r.kt)("h2",{id:"writing-tests"},"Writing Tests"),(0,r.kt)("h3",{id:"unit-tests"},"Unit Tests"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Unit tests should not rely on any persistent storage. If you want to test the full stack write an e2e test."))),(0,r.kt)("p",null,"If you have created a new class you should create a corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},".spec.ts")," file in the packages test directory. The test file should be located in a test directory that matches the path in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory."),(0,r.kt)("p",null,"For example if you created a new class with the following directory structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/src\n  /my\n    /cool.feature.ts\n")),(0,r.kt)("p",null,"Your test file would be located in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/test\n  /my \n    /cool.feature.spec.ts\n")),(0,r.kt)("p",null,"Your unit tests should cover as many code paths as possible including error cases and conditionals"),(0,r.kt)("h3",{id:"e2e-tests"},"E2E Tests"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"e2e")," test cases should cover high level functionaly not focusing on all code paths but ensuring that your code is covered when called all the way through the stack as you expect."),(0,r.kt)("p",null,"Most test cases can be included in an example that already exists. If you are including an entirely new feature that you cannot integration tested without changing existing functionality feel free to create a new example.  "),(0,r.kt)("p",null,"To add a new example follow these steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new directory in the ",(0,r.kt)("inlineCode",{parentName:"li"},"examples")," directory.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The name should be short but enough to describe the use case."))),(0,r.kt)("li",{parentName:"ul"},"Add your example to the ",(0,r.kt)("inlineCode",{parentName:"li"},"examples/nest-cli.json")," ",(0,r.kt)("inlineCode",{parentName:"li"},"projects")," array.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If your example requires ",(0,r.kt)("inlineCode",{parentName:"li"},"typeorm")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"sequelize")," add your init scripts to:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/init-scripts/mysql")," - See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tripss/nestjs-query/blob/master/examples/init-scripts/mysql/init-basic.sql"},"basic example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/init-scripts/postgres")," - See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tripss/nestjs-query/blob/master/examples/init-scripts/postgres/init-basic.sql"},"basic example")))),(0,r.kt)("li",{parentName:"ul"},"All files should match the following format ",(0,r.kt)("inlineCode",{parentName:"li"},"init-{example-name}.sql"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your init script should create a ",(0,r.kt)("inlineCode",{parentName:"li"},"USER"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"GRANT PRIVELAGES")," to the user for the database."),(0,r.kt)("li",{parentName:"ul"},"Be sure to use the user you created in your ",(0,r.kt)("inlineCode",{parentName:"li"},"app.module.ts")," file. See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tripss/nestjs-query/blob/master/examples/basic/src/app.module.ts"},"the basic example")," "))))),(0,r.kt)("li",{parentName:"ul"},"Add your modules and tests.")),(0,r.kt)("p",null,"To run your tests follow ",(0,r.kt)("a",{parentName:"p",href:"#running-e2e-tests"},"these instructions")),(0,r.kt)("p",null,"To start your example run the following"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm run start -- {example-name}")),(0,r.kt)("h2",{id:"running-tests"},"Running Tests"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nestjs-query")," includes both ",(0,r.kt)("inlineCode",{parentName:"p"},"unit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"integration")," tests. "),(0,r.kt)("h3",{id:"running-lint"},"Running Lint"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm run lint")),(0,r.kt)("h3",{id:"running-unit-tests"},"Running Unit Tests"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm run jest:unit")),(0,r.kt)("h3",{id:"running-e2e-tests"},"Running E2E Tests"),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},"e2e")," tests are located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"examples")," directory. "),(0,r.kt)("p",null,"The first time you run the ",(0,r.kt)("inlineCode",{parentName:"p"},"e2e")," tests you will need to start all backing services. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ./examples\ndocker-compose up -d\n")),(0,r.kt)("p",null,"To run the tests you can issue the following from the root "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run jest:e2e\n")),(0,r.kt)("h3",{id:"running-all-tests"},"Running All Tests"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will need to start the backing services described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Running E2E Tests")," first."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run jest\n")),(0,r.kt)("h2",{id:"conventional-commits"},"Conventional Commits"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nestjs-query")," follows the ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits Guidelines")),(0,r.kt)("p",null,"Format: ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>(<scope>): <subject>")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<scope>")," is optional, but is typically the scope of the feature either package (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"core"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"grapqql"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"typeorm")," etc)"),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"feat: allow overriding of webpack config\n^--^  ^--------------------------------^\n|     |\n|     +-> Summary in present tense.\n|\n+-------\x3e Type: chore, docs, feat, fix, refactor, style, or test.\n")),(0,r.kt)("p",null,"The various types of commits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feat"),": (new feature for the user, not a new feature for build script)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fix"),": (bug fix for the user, not a fix to a build script)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docs"),": (changes to the documentation)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"style"),": (formatting, missing semi colons, etc; no production code change)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refactor"),": (refactoring production code, eg. renaming a variable)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test"),": (adding missing tests, refactoring tests; no production code change)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chore"),": (updating grunt tasks etc; no production code change)")),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"All new features require documentation so other users can take advantage of them."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"nestjs-query")," uses ",(0,r.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"docusaurus")," for documentation."))),(0,r.kt)("h3",{id:"serving-docs-locally"},"Serving Docs Locally"),(0,r.kt)("p",null,"Running the documentation locally is the easiest way to view your changes to ensure they render as you expect."),(0,r.kt)("p",null,"To run the docs locally do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ./documentation\nnpm install # first time only\nnpm run start\n")),(0,r.kt)("h3",{id:"creating-a-new-page"},"Creating A New Page"),(0,r.kt)("p",null,"If you find yourself in a situation where you are adding a new feature or documentation that requires its own page feel free to create a doc in the appropriate directory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"introduction")," - A quick introduction for developers with installation guides, a feature list and example application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"concepts")," - Core concepts required to get started in ",(0,r.kt)("inlineCode",{parentName:"li"},"nestjs-query")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"graphql")," - All documentation that is graphql specific."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"persistence")," - Documentation related to the different persistence libary adapters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"utilities")," - Miscellaneous utilties that are useful when building an application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"migration-guides")," - Documentation on how to upgrade between versions when breaking changes are introduced."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"faq.md")," - Common questions with links to the relevant documentation.")),(0,r.kt)("p",null,"If you are unsure where to add documentation, feel free to issue a draft PR and include a question on where to add the relevant documentation!"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When creating a new page you need to be sure to add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"documentation/sidebars.js"),"."))))}c.isMDXComponent=!0}}]);