"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[3190],{2856:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=o(5893),r=o(1151);const s={title:"Soft Delete"},i=void 0,l={id:"persistence/typeorm/soft-delete",title:"Soft Delete",description:"TypeOrm supports soft deletes. This feature does not delete records but instead updates the column decorated with @DeleteDateColumn.",source:"@site/docs/persistence/typeorm/soft-delete.md",sourceDirName:"persistence/typeorm",slug:"/persistence/typeorm/soft-delete",permalink:"/nestjs-query/docs/persistence/typeorm/soft-delete",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/persistence/typeorm/soft-delete.md",tags:[],version:"current",frontMatter:{title:"Soft Delete"},sidebar:"docs",previous:{title:"Multiple Databases",permalink:"/nestjs-query/docs/persistence/typeorm/multiple-databases"},next:{title:"Testing Services",permalink:"/nestjs-query/docs/persistence/typeorm/testing-services"}},d={},c=[{value:"Setting up your entity.",id:"setting-up-your-entity",level:2},{value:"Soft Delete Service",id:"soft-delete-service",level:2},{value:"Adding restore mutations.",id:"adding-restore-mutations",level:3},{value:"Complete Example",id:"complete-example",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"TypeOrm"})," supports ",(0,n.jsx)(t.a,{href:"https://typeorm.io/#/delete-query-builder/soft-delete",children:"soft deletes"}),". This feature does not delete records but instead updates the column decorated with ",(0,n.jsx)(t.code,{children:"@DeleteDateColumn"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Before continuing it is recommended that you read the following."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://typeorm.io/#/decorator-reference/deletedatecolumn",children:"https://typeorm.io/#/decorator-reference/deletedatecolumn"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://typeorm.io/#/delete-query-builder/soft-delete",children:"https://typeorm.io/#/delete-query-builder/soft-delete"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"setting-up-your-entity",children:"Setting up your entity."}),"\n",(0,n.jsx)(t.p,{children:"Before enabling soft deletes you must add the DeleteDateColumn to your entity."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.entity.ts"',children:"import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';\n\n@Entity({ name: 'todo_item' })\nexport class TodoItemEntity {\n  @PrimaryGeneratedColumn()\n  id!: number;\n\n  @Column()\n  title!: string;\n\n  @Column({ nullable: true })\n  description?: string;\n\n  @Column()\n  completed!: boolean;\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n\n  // Add this column to your entity!\n  @DeleteDateColumn()\n  deletedAt?: Date;\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The important column is the ",(0,n.jsx)(t.code,{children:"deletedAt"})," column in the above example. Without this column soft deletes will not work. If you add this column all reads from the ",(0,n.jsx)(t.code,{children:"typeorm"})," repository will add a where clause checking that the column ",(0,n.jsx)(t.code,{children:"IS NULL"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"soft-delete-service",children:"Soft Delete Service"}),"\n",(0,n.jsxs)(t.p,{children:["Once you have added the column to your entity you need to declare your service setting the ",(0,n.jsx)(t.code,{children:"useSoftDelete"})," flag."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.service.ts"',children:"import { QueryService } from '@ptc-org/nestjs-query-core';\nimport { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemEntity)\nexport class TodoItemService extends TypeOrmQueryService<TodoItemEntity> {\n  constructor(@InjectRepository(TodoItemEntity) repo: Repository<TodoItemEntity>) {\n    // pass the use soft delete option to the service.\n    super(repo, { useSoftDelete: true });\n  }\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Notice that when calling ",(0,n.jsx)(t.code,{children:"super"})," the ",(0,n.jsx)(t.code,{children:"useSoftDelete"})," option is set to ",(0,n.jsx)(t.code,{children:"true"}),". This will ensure that all ",(0,n.jsx)(t.code,{children:"deletes"})," use the ",(0,n.jsx)(t.code,{children:"softRemove"})," when deleting one or ",(0,n.jsx)(t.code,{children:"softDelete"})," when deleting many."]}),"\n",(0,n.jsx)(t.h3,{id:"adding-restore-mutations",children:"Adding restore mutations."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"nestjs-query"})," does not automatically expose ",(0,n.jsx)(t.code,{children:"restore"})," mutations. In this example we add the restore mutations."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.resolver.ts"',children:"import { UpdateManyResponse, Filter } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver, FilterType, UpdateManyResponseType } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver, Args, Mutation, ID } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n\n  // restore one mutation will update the `deletedAt` column to null.\n  @Mutation(() => TodoItemDTO)\n  restoreOneTodoItem(@Args('input', { type: () => ID }) id: number): Promise<TodoItemDTO> {\n    return this.service.restoreOne(id);\n  }\n\n  // restore many mutation will update the `deletedAt` column to null for all todo items that\n  // match the filter.\n  @Mutation(() => UpdateManyResponseType())\n  restoreManyTodoItems(\n    @Args('input', { type: () => FilterType(TodoItemDTO) }) filter: Filter<TodoItemDTO>,\n  ): Promise<UpdateManyResponse> {\n    return this.service.restoreMany(filter);\n  }\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,n.jsxs)(t.p,{children:["To see a complete example ",(0,n.jsx)(t.a,{href:"https://github.com/tripss/nestjs-query/tree/master/examples/typeorm-soft-delete",children:"see here."})]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>i});var n=o(7294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);