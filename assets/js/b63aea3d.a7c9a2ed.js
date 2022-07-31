"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[1788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,m=e.defaultValue,b=e.values,v=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==T&&!y.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),x=k.tabGroupChoices,O=k.setTabGroupChoices,I=(0,a.useState)(T),F=I[0],w=I[1],D=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var S=x[v];null!=S&&S!==F&&y.some((function(e){return e.value===S}))&&w(S)}var C=function(e){var t=e.currentTarget,n=D.indexOf(t),r=y[n].value;r!==F&&(j(t),w(r),null!=v&&O(v,String(r)))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=D.indexOf(e.currentTarget)+1;n=null!=(r=D[a])?r:D[0];break;case"ArrowLeft":var o,l=D.indexOf(e.currentTarget)-1;n=null!=(o=D[l])?o:D[D.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:F===t?0:-1,"aria-selected":F===t,key:t,ref:function(e){return D.push(e)},onKeyDown:N,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":F===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(g.filter((function(e){return e.props.value===F}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==F})}))))}function m(e){var t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},7501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5488),i=n(5162),s=["components"],u={title:"v0.14.x to v0.15.x"},c=void 0,d={unversionedId:"migration-guides/v0.14.x-to-v0.15.x",id:"migration-guides/v0.14.x-to-v0.15.x",title:"v0.14.x to v0.15.x",description:"In the v0.15.x the cursor connection type was updated to allow for enabling a totalCount field. When enabling this field nestjs-query needed to explicitly name each connection type to allow each relation connection to independently enable the totalCount field.",source:"@site/docs/migration-guides/v0.14.x-to-v0.15.x.mdx",sourceDirName:"migration-guides",slug:"/migration-guides/v0.14.x-to-v0.15.x",permalink:"/nestjs-query/docs/migration-guides/v0.14.x-to-v0.15.x",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.14.x-to-v0.15.x.mdx",tags:[],version:"current",frontMatter:{title:"v0.14.x to v0.15.x"},sidebar:"docs",previous:{title:"v0.15.x to v0.16.x",permalink:"/nestjs-query/docs/migration-guides/v0.15.x-to-v0.16.x"},next:{title:"v0.13.x to v0.14.x",permalink:"/nestjs-query/docs/migration-guides/v0.13.x-to-v0.14.x"}},p={},m=[],b={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.15.x")," the cursor connection type was updated to allow for enabling a ",(0,o.kt)("inlineCode",{parentName:"p"},"totalCount")," field. When enabling this field ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-query")," needed to explicitly name each connection type to allow each relation connection to independently enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"totalCount")," field."),(0,o.kt)("p",null,"In previous versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-query")," the connection type was shared between all instances which caused the totalCount field to not always be exposed. In ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.15.x")," all instances of a connection are uniquely named."),(0,o.kt)("p",null,"For example, suppose the following DTOS."),(0,o.kt)(l.Z,{defaultValue:"todoitem",values:[{label:"todo-item.dto.ts",value:"todoitem"},{label:"sub-task.dto.ts",value:"subtask"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"todoitem",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.dto.ts"',title:'"todo-item.dto.ts"'},"import { FilterableField, Connection } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../../sub-task/dto/sub-task.dto';\n\n@ObjectType('TodoItem')\n@Connection('subTasks', () => SubTaskDTO, { enableTotalCount: true })\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @FilterableField()\n  priority!: number;\n}\n\n"))),(0,o.kt)(i.Z,{value:"subtask",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="sub-task.dto.ts"',title:'"sub-task.dto.ts"'},"import { FilterableField, Relation } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../../todo-item/dto/todo-item.dto';\n\n@ObjectType('SubTask')\n@Relation('todoItem', () => TodoItemDTO, { disableRemove: true })\nexport class SubTaskDTO {\n  @FilterableField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @FilterableField()\n  todoItemId!: string;\n}\n\n")))),(0,o.kt)("p",null,"In previous versions the generated graphql would have been"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n  age: Float!\n  priority: Float!\n  subTasks(\n    paging: CursorPaging = { first: 10 }\n\n    filter: SubTaskFilter = {}\n\n    sorting: [SubTaskSort!] = []\n  ): SubTaskConnection!\n}\n\ntype SubTaskConnection {\n  pageInfo: PageInfo!\n  edges: [SubTaskEdge!]!\n}\n")),(0,o.kt)("p",null,"In the latest version the relation gets its own connection type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n  age: Float!\n  priority: Float!\n  subTasks(\n    paging: CursorPaging = { first: 10 }\n\n    filter: SubTaskFilter = {}\n\n    sorting: [SubTaskSort!] = []\n  ): TodoItemSubTasksConnection!\n}\n\ntype TodoItemSubTasksConnection {\n  pageInfo: PageInfo!\n  edges: [SubTaskEdge!]!\n  totalCount: Int!\n}\n")))}v.isMDXComponent=!0}}]);