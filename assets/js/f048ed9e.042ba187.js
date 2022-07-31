"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[9962],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={title:"Getting Started"},l=void 0,p={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started",description:"Nestjs-Query is collection of packages to make crud for graphql (and potentially other transports) easier.",source:"@site/docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/nestjs-query/docs/introduction/getting-started",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/introduction/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",next:{title:"Install",permalink:"/nestjs-query/docs/introduction/install"}},u={},m=[{value:"Why?",id:"why",level:2},{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"Packages",id:"packages",level:2},{value:"Migration Guides",id:"migration-guides",level:2}],c={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nestjs-Query is collection of packages to make crud for ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," (and potentially other transports) easier."),(0,i.kt)("h2",{id:"why"},"Why?"),(0,i.kt)("p",null,"While working on projects in nestjs it was very easy to get up and running with typeorm and graphql however, there were many patterns that were common between the resolvers. In particular querying, sorting and paging.  "),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Built on top of ",(0,i.kt)("a",{parentName:"li",href:"https://nestjs.com/"},"nestjs")),(0,i.kt)("li",{parentName:"ul"},"Out of the box ",(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/resolvers"},"CRUD for GraphQL")," using ",(0,i.kt)("a",{parentName:"li",href:"https://typeorm.io/"},"TypeORM"),", ",(0,i.kt)("a",{parentName:"li",href:"https://sequelize.org/"},"Sequelize")," or ",(0,i.kt)("a",{parentName:"li",href:"https://mongoosejs.com/"},"Mongoose")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/aggregations"},"Aggregate Queries")," on objects and their relations."),(0,i.kt)("li",{parentName:"ul"},"Out of the box ",(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/subscriptions"},"subscriptions")," on all ",(0,i.kt)("inlineCode",{parentName:"li"},"CRUD")," operations."),(0,i.kt)("li",{parentName:"ul"},"Support for one to one, one to many, many to one and many to many ",(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/relations"},"relations"),"."),(0,i.kt)("li",{parentName:"ul"},"Built in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/graphql/dataloader"},"dataloader")," avoiding the ",(0,i.kt)("inlineCode",{parentName:"li"},"n+1")," problem"),(0,i.kt)("li",{parentName:"ul"},"Relay ",(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/relay/graphql/connections.htm"},"connections")," for paging results  ")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/nestjs-query/docs/introduction/install"},"installation docs")),(0,i.kt)("h2",{id:"packages"},"Packages"),(0,i.kt)("p",null,"Nestjs-query is composed of multiple packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tripss/nestjs-query/tree/master/packages/core"},(0,i.kt)("inlineCode",{parentName:"a"},"@ptc-org/nestjs-query-core"))," - Defines all interfaces and utility types implemented by the other packages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tripss/nestjs-query/tree/master/packages/query-graphql"},(0,i.kt)("inlineCode",{parentName:"a"},"@ptc-org/nestjs-query-graphql"))," - Package that provides the graphql resolver and decorators for crud endpoints."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tripss/nestjs-query/tree/master/packages/query-typeorm"},(0,i.kt)("inlineCode",{parentName:"a"},"@ptc-org/nestjs-query-typeorm"))," - Package that implements a Typeorm service that can be used by itself or with the graphql resolver provided by ",(0,i.kt)("inlineCode",{parentName:"li"},"@ptc-org/nestjs-query-graphql"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tripss/nestjs-query/tree/master/packages/query-sequelize"},(0,i.kt)("inlineCode",{parentName:"a"},"@ptc-org/nestjs-query-sequelize"))," - Package that implements a Sequelize service that can be used by itself or with the graphql resolver provided by ",(0,i.kt)("inlineCode",{parentName:"li"},"@ptc-org/nestjs-query-graphql"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tripss/nestjs-query/tree/master/packages/query-mongoose"},(0,i.kt)("inlineCode",{parentName:"a"},"@ptc-org/nestjs-query-mongoose"))," - Package that implements a Mongoose service that can be used by itself or with the graphql resolver provided by ",(0,i.kt)("inlineCode",{parentName:"li"},"@ptc-org/nestjs-query-graphql"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tripss/nestjs-query/tree/master/packages/query-typegoose"},(0,i.kt)("inlineCode",{parentName:"a"},"@ptc-org/nestjs-query-typegoose"))," - Package that implements a Typegoose service that can be used by itself or with the graphql resolver provided by ",(0,i.kt)("inlineCode",{parentName:"li"},"@ptc-org/nestjs-query-graphql"),".")),(0,i.kt)("h2",{id:"migration-guides"},"Migration Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.24.x-to-v0.25.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.24.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.25.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.23.x-to-v0.24.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.23.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.24.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.22.x-to-v0.23.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.22.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.23.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.15.x-to-v0.16.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.15.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.16.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.14.x-to-v0.15.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.14.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.15.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.13.x-to-v0.14.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.13.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.14.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.12.x-to-v0.13.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.12.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.13.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.10.x-to-v0.11.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.10.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.11.x"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nestjs-query/docs/migration-guides/v0.5.x-to-v0.6.x"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.5.x")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"v0.6.x")))))}d.isMDXComponent=!0}}]);