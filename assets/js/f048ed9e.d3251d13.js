"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[9962],{945:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(5893),n=t(1151);const i={title:"Getting Started"},o=void 0,c={id:"introduction/getting-started",title:"Getting Started",description:"Nestjs-Query is collection of packages to make crud for graphql (and potentially other transports) easier.",source:"@site/docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/nestjs-query/docs/introduction/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/introduction/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",next:{title:"Install",permalink:"/nestjs-query/docs/introduction/install"}},l={},d=[{value:"Why?",id:"why",level:2},{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"Packages",id:"packages",level:2},{value:"Migration Guides",id:"migration-guides",level:2}];function a(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Nestjs-Query is collection of packages to make crud for ",(0,r.jsx)(s.code,{children:"graphql"})," (and potentially other transports) easier."]}),"\n",(0,r.jsx)(s.h2,{id:"why",children:"Why?"}),"\n",(0,r.jsx)(s.p,{children:"While working on projects in nestjs it was very easy to get up and running with typeorm and graphql however, there were many patterns that were common between the resolvers. In particular querying, sorting and paging."}),"\n",(0,r.jsx)(s.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Built on top of ",(0,r.jsx)(s.a,{href:"https://nestjs.com/",children:"nestjs"})]}),"\n",(0,r.jsxs)(s.li,{children:["Out of the box ",(0,r.jsx)(s.a,{href:"/nestjs-query/docs/graphql/resolvers",children:"CRUD for GraphQL"})," using ",(0,r.jsx)(s.a,{href:"https://typeorm.io/",children:"TypeORM"}),", ",(0,r.jsx)(s.a,{href:"https://sequelize.org/",children:"Sequelize"})," or ",(0,r.jsx)(s.a,{href:"https://mongoosejs.com/",children:"Mongoose"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/nestjs-query/docs/graphql/aggregations",children:"Aggregate Queries"})," on objects and their relations."]}),"\n",(0,r.jsxs)(s.li,{children:["Out of the box ",(0,r.jsx)(s.a,{href:"/nestjs-query/docs/graphql/subscriptions",children:"subscriptions"})," on all ",(0,r.jsx)(s.code,{children:"CRUD"})," operations."]}),"\n",(0,r.jsxs)(s.li,{children:["Support for one to one, one to many, many to one and many to many ",(0,r.jsx)(s.a,{href:"/nestjs-query/docs/graphql/relations",children:"relations"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Built in ",(0,r.jsx)(s.a,{href:"https://github.com/graphql/dataloader",children:"dataloader"})," avoiding the ",(0,r.jsx)(s.code,{children:"n+1"})," problem"]}),"\n",(0,r.jsxs)(s.li,{children:["Relay ",(0,r.jsx)(s.a,{href:"https://facebook.github.io/relay/graphql/connections.htm",children:"connections"})," for paging results"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(s.p,{children:["Check out the ",(0,r.jsx)(s.a,{href:"/nestjs-query/docs/introduction/install",children:"installation docs"})]}),"\n",(0,r.jsx)(s.h2,{id:"packages",children:"Packages"}),"\n",(0,r.jsx)(s.p,{children:"Nestjs-query is composed of multiple packages"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/tripss/nestjs-query/tree/master/packages/core",children:(0,r.jsx)(s.code,{children:"@ptc-org/nestjs-query-core"})})," - Defines all interfaces and utility types implemented by the other packages."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/tripss/nestjs-query/tree/master/packages/query-graphql",children:(0,r.jsx)(s.code,{children:"@ptc-org/nestjs-query-graphql"})})," - Package that provides the graphql resolver and decorators for crud endpoints."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/tripss/nestjs-query/tree/master/packages/query-typeorm",children:(0,r.jsx)(s.code,{children:"@ptc-org/nestjs-query-typeorm"})})," - Package that implements a Typeorm service that can be used by itself or with the graphql resolver provided by ",(0,r.jsx)(s.code,{children:"@ptc-org/nestjs-query-graphql"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/tripss/nestjs-query/tree/master/packages/query-sequelize",children:(0,r.jsx)(s.code,{children:"@ptc-org/nestjs-query-sequelize"})})," - Package that implements a Sequelize service that can be used by itself or with the graphql resolver provided by ",(0,r.jsx)(s.code,{children:"@ptc-org/nestjs-query-graphql"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/tripss/nestjs-query/tree/master/packages/query-mongoose",children:(0,r.jsx)(s.code,{children:"@ptc-org/nestjs-query-mongoose"})})," - Package that implements a Mongoose service that can be used by itself or with the graphql resolver provided by ",(0,r.jsx)(s.code,{children:"@ptc-org/nestjs-query-graphql"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/tripss/nestjs-query/tree/master/packages/query-typegoose",children:(0,r.jsx)(s.code,{children:"@ptc-org/nestjs-query-typegoose"})})," - Package that implements a Typegoose service that can be used by itself or with the graphql resolver provided by ",(0,r.jsx)(s.code,{children:"@ptc-org/nestjs-query-graphql"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"migration-guides",children:"Migration Guides"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.a,{href:"/nestjs-query/docs/migration-guides/v0.24.x-to-v0.25.x",children:[(0,r.jsx)(s.code,{children:"v0.24.x"})," to ",(0,r.jsx)(s.code,{children:"v0.25.x"})]})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.a,{href:"/nestjs-query/docs/migration-guides/v0.23.x-to-v0.24.x",children:[(0,r.jsx)(s.code,{children:"v0.23.x"})," to ",(0,r.jsx)(s.code,{children:"v0.24.x"})]})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.a,{href:"/nestjs-query/docs/migration-guides/v0.22.x-to-v0.23.x",children:[(0,r.jsx)(s.code,{children:"v0.22.x"})," to ",(0,r.jsx)(s.code,{children:"v0.23.x"})]})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.a,{href:"/nestjs-query/docs/migration-guides/v0.15.x-to-v0.16.x",children:[(0,r.jsx)(s.code,{children:"v0.15.x"})," to ",(0,r.jsx)(s.code,{children:"v0.16.x"})]})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.a,{href:"/nestjs-query/docs/migration-guides/v0.14.x-to-v0.15.x",children:[(0,r.jsx)(s.code,{children:"v0.14.x"})," to ",(0,r.jsx)(s.code,{children:"v0.15.x"})]})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.a,{href:"/nestjs-query/docs/migration-guides/v0.13.x-to-v0.14.x",children:[(0,r.jsx)(s.code,{children:"v0.13.x"})," to ",(0,r.jsx)(s.code,{children:"v0.14.x"})]})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.a,{href:"/nestjs-query/docs/migration-guides/v0.12.x-to-v0.13.x",children:[(0,r.jsx)(s.code,{children:"v0.12.x"})," to ",(0,r.jsx)(s.code,{children:"v0.13.x"})]})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.a,{href:"/nestjs-query/docs/migration-guides/v0.10.x-to-v0.11.x",children:[(0,r.jsx)(s.code,{children:"v0.10.x"})," to ",(0,r.jsx)(s.code,{children:"v0.11.x"})]})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.a,{href:"/nestjs-query/docs/migration-guides/v0.5.x-to-v0.6.x",children:[(0,r.jsx)(s.code,{children:"v0.5.x"})," to ",(0,r.jsx)(s.code,{children:"v0.6.x"})]})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>o});var r=t(7294);const n={},i=r.createContext(n);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);