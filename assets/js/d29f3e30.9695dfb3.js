"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[8719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=s,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),s=r(3366),i=(r(7294),r(3905)),a=["components"],o={title:"Getting Started"},c=void 0,l={unversionedId:"persistence/sequelize/getting-started",id:"persistence/sequelize/getting-started",title:"Getting Started",description:"The @ptc-org/nestjs-query-sequelize package provides an implementation of @ptc-org/nestjs-query-core QueryService.",source:"@site/docs/persistence/sequelize/getting-started.md",sourceDirName:"persistence/sequelize",slug:"/persistence/sequelize/getting-started",permalink:"/nestjs-query/docs/persistence/sequelize/getting-started",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/persistence/sequelize/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Testing Services",permalink:"/nestjs-query/docs/persistence/typeorm/testing-services"},next:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/sequelize/custom-service"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Docs",id:"docs",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-sequelize")," package provides an implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-core")," ",(0,i.kt)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/services"},"QueryService"),"."),(0,i.kt)("p",null,"This package is built using ",(0,i.kt)("a",{parentName:"p",href:"https://sequelize.org/"},"sequelize")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/database#sequelize-integration"},"@nestjs/sequelize"),". If you are unfamiliar with them I suggest you read their documentation first."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/nestjs-query/docs/introduction/install#nestjs-queryquery-sequelize"},"Installation Docs")),(0,i.kt)("h2",{id:"docs"},"Docs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read the ",(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/services"},"QueryService docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/sequelize/custom-service"},"Custom Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/sequelize/serialization"},"Serialization")," - How to serialize ",(0,i.kt)("inlineCode",{parentName:"li"},"sequelize")," models.")))}m.isMDXComponent=!0}}]);