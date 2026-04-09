import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { INestApplication, Injectable, NotFoundException, Scope } from '@nestjs/common'
import { GraphQLModule, ID, ObjectType } from '@nestjs/graphql'
import { Test } from '@nestjs/testing'
import { Class, Filter, FindRelationOptions, NoOpQueryService } from '@ptc-org/nestjs-query-core'
import request from 'supertest'

import { Authorize, FilterableField, NestjsQueryGraphQLModule, PagingStrategies, Relation } from '../../src'
import { CustomAuthorizer } from '../../src/auth'

@Injectable({ scope: Scope.REQUEST })
class RequestScopedChildAuthorizer implements CustomAuthorizer<ChildDTO> {
  authorize(): Promise<Filter<ChildDTO>> {
    return Promise.resolve({})
  }
}

@ObjectType('Child')
@Authorize(RequestScopedChildAuthorizer)
class ChildDTO {
  @FilterableField(() => ID)
  id!: string

  @FilterableField()
  title!: string
}

@ObjectType('Parent')
@Relation('child', () => ChildDTO)
class ParentDTO {
  @FilterableField(() => ID)
  id!: string

  @FilterableField()
  title!: string
}

@Injectable()
class ParentService extends NoOpQueryService<ParentDTO> {
  private static readonly parentRecord: ParentDTO = {
    id: '1',
    title: 'Parent'
  }

  private static readonly childRecord: ChildDTO = {
    id: 'child-1',
    title: 'Child'
  }

  override getById(id: string): Promise<ParentDTO> {
    if (id !== ParentService.parentRecord.id) {
      return Promise.reject(new NotFoundException(`Unable to find id: ${id}`))
    }

    return Promise.resolve(ParentService.parentRecord)
  }

  override findRelation<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: ParentDTO | ParentDTO[],
    opts?: FindRelationOptions<Relation>
  ): Promise<(Relation | undefined) | Map<ParentDTO, Relation | undefined>> {
    void RelationClass
    void relationName
    void opts

    if (Array.isArray(dto)) {
      return Promise.resolve(new Map(dto.map((parent) => [parent, ParentService.childRecord as unknown as Relation])))
    }

    return Promise.resolve(ParentService.childRecord as unknown as Relation)
  }
}

describe('Request scoped authorizer integration', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: true,
          playground: false
        }),
        NestjsQueryGraphQLModule.forFeature({
          services: [ParentService],
          dtos: [{ DTOClass: ChildDTO }],
          resolvers: [
            {
              DTOClass: ParentDTO,
              ServiceClass: ParentService,
              pagingStrategy: PagingStrategies.NONE,
              create: { disabled: true },
              update: { disabled: true },
              delete: { disabled: true },
              read: { many: { disabled: true } }
            }
          ]
        })
      ]
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should the parent and its child', async () => {
    const query = `
      query GetParent($id: ID!) {
        parent(id: $id) {
          id
          title
          child {
            id
            title
          }
        }
      }
    `

    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({ query, variables: { id: '1' } })
      .expect(200)

    expect(response.body.errors).toBeUndefined()
    expect(response.body.data).toEqual({ parent: { id: '1', title: 'Parent', child: { id: 'child-1', title: 'Child' } } })
  })
})
