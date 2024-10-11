import { Query, Resolver } from '@nestjs/graphql'
import { QueryResolveTree, SortDirection } from '@ptc-org/nestjs-query-core'
import {
  CursorQueryArgsType,
  NonePagingQueryArgsType,
  OffsetConnectionType,
  OffsetQueryArgsType,
  PagingStrategies
} from '@ptc-org/nestjs-query-graphql'
import { deepEqual, objectContaining, when } from 'ts-mockito'

import { ReadRelationsResolver, RelationsOpts } from '../../../../src/resolvers/relations'
import { createResolverFromNest, generateSchema, TestRelationDTO, TestResolverDTO, TestService } from '../../../__fixtures__'

describe('ReadRelationsResolver - basics', () => {
  const expectResolverSDL = async (opts?: RelationsOpts) => {
    @Resolver(() => TestResolverDTO)
    class TestSDLResolver extends ReadRelationsResolver(TestResolverDTO, opts ?? {}) {
      @Query(() => TestResolverDTO)
      test(): TestResolverDTO {
        return { id: '1', stringField: 'foo' }
      }
    }

    const schema = await generateSchema([TestSDLResolver])
    expect(schema).toMatchSnapshot()
  }

  it('should not add read methods if one and many are empty', () => expectResolverSDL())

  describe('one', () => {
    @Resolver(() => TestResolverDTO)
    class TestResolver extends ReadRelationsResolver(TestResolverDTO, {
      one: { relation: { DTO: TestRelationDTO }, custom: { DTO: TestRelationDTO, relationName: 'other' } }
    }) {
      constructor(service: TestService) {
        super(service)
      }
    }

    it('should not add read one methods if disableRead is true', () =>
      expectResolverSDL({ one: { relation: { DTO: TestRelationDTO, disableRead: true } } }))

    it('should use the object type name', () => expectResolverSDL({ one: { relation: { DTO: TestRelationDTO } } }))

    it('should call the service findRelation with the provided dto', async () => {
      const { resolver, mockService } = await createResolverFromNest(TestResolver)
      const dto: TestResolverDTO = {
        id: 'id-1',
        stringField: 'foo'
      }
      const output: TestRelationDTO = {
        id: 'id-2',
        testResolverId: dto.id
      }
      when(
        mockService.findRelation(
          TestRelationDTO,
          'relation',
          deepEqual([dto]),
          deepEqual({
            filter: undefined,
            withDeleted: undefined,
            lookedAhead: undefined
          })
        )
      ).thenResolve(new Map([[dto, output]]))
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const result = await resolver.findRelation(dto, {})
      return expect(result).toEqual(output)
    })

    it('should call the service findRelation with the provided dto and correct relation name', async () => {
      const { resolver, mockService } = await createResolverFromNest(TestResolver)
      const dto: TestResolverDTO = {
        id: 'id-1',
        stringField: 'foo'
      }
      const output: TestRelationDTO = {
        id: 'id-2',
        testResolverId: dto.id
      }
      when(
        mockService.findRelation(
          TestRelationDTO,
          'other',
          deepEqual([dto]),
          deepEqual({
            filter: undefined,
            withDeleted: undefined,
            lookedAhead: undefined
          })
        )
      ).thenResolve(new Map([[dto, output]]))
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const result = await resolver.findCustom(dto, {})
      return expect(result).toEqual(output)
    })
  })

  describe('one (withDeleted)', () => {
    @Resolver(() => TestResolverDTO)
    class TestDeletedResolver extends ReadRelationsResolver(TestResolverDTO, {
      one: { relation: { DTO: TestRelationDTO, withDeleted: true } }
    }) {
      constructor(service: TestService) {
        super(service)
      }
    }

    it('should call the service findRelation with the provided dto', async () => {
      const { resolver, mockService } = await createResolverFromNest(TestDeletedResolver)
      const dto: TestResolverDTO = {
        id: 'id-1',
        stringField: 'foo'
      }
      const output: TestRelationDTO = {
        id: 'id-2',
        testResolverId: dto.id
      }
      when(
        mockService.findRelation(
          TestRelationDTO,
          'relation',
          deepEqual([dto]),
          deepEqual({
            filter: undefined,
            withDeleted: true,
            lookedAhead: undefined
          })
        )
      ).thenResolve(new Map([[dto, output]]))
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const result = await resolver.findRelation(dto, {})
      return expect(result).toEqual(output)
    })
  })

  describe('many', () => {
    describe('disabled sorting/filtering', () => {
      @Resolver(() => TestResolverDTO)
      class TestDisabledResolver extends ReadRelationsResolver(TestResolverDTO, {
        many: {
          relations: {
            DTO: TestRelationDTO,
            disableFilter: true,
            disableSort: true,
            // @ts-ignore
            defaultSort: [{ field: 'id', direction: SortDirection.ASC }],
            defaultFilter: {
              // @ts-ignore
              id: { eq: 'id-2' }
            }
          }
        }
      }) {
        constructor(service: TestService) {
          super(service)
        }
      }

      it('should still use the provided default filter', async () => {
        const { resolver, mockService } = await createResolverFromNest(TestDisabledResolver)
        const dto: TestResolverDTO = {
          id: 'id-1',
          stringField: 'foo'
        }
        const query: CursorQueryArgsType<TestRelationDTO> = {
          paging: { first: 1 }
        }
        const output: TestRelationDTO[] = [
          {
            id: 'id-2',
            testResolverId: dto.id
          }
        ]
        when(
          mockService.queryRelations(
            TestRelationDTO,
            'relations',
            deepEqual([dto]),
            deepEqual({
              filter: { id: { eq: 'id-2' } },
              paging: { limit: 2, offset: 0 },
              sorting: [
                {
                  field: 'id',
                  direction: SortDirection.ASC
                }
              ],
              relations: undefined
            }),
            deepEqual({ withDeleted: undefined })
          )
        ).thenResolve(new Map([[dto, output]]))
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const result = await resolver.queryRelations(dto, query, {})
        return expect(result).toEqual({
          edges: [
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
              node: {
                id: output[0].id,
                testResolverId: dto.id
              }
            }
          ],
          pageInfo: {
            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: 'YXJyYXljb25uZWN0aW9uOjA='
          },
          totalCountFn: expect.any(Function)
        })
      })
    })

    describe('many connection query', () => {
      @Resolver(() => TestResolverDTO)
      class TestResolver extends ReadRelationsResolver(TestResolverDTO, {
        one: { relation: { DTO: TestRelationDTO }, custom: { DTO: TestRelationDTO, relationName: 'other' } },
        many: { relations: { DTO: TestRelationDTO }, customs: { DTO: TestRelationDTO, relationName: 'others' } }
      }) {
        constructor(service: TestService) {
          super(service)
        }
      }

      it('should call the service queryRelations with the provided dto', async () => {
        const { resolver, mockService } = await createResolverFromNest(TestResolver)
        const dto: TestResolverDTO = {
          id: 'id-1',
          stringField: 'foo'
        }
        const query: CursorQueryArgsType<TestRelationDTO> = {
          filter: { id: { eq: 'id-2' } },
          paging: { first: 1 }
        }
        const output: TestRelationDTO[] = [
          {
            id: 'id-2',
            testResolverId: dto.id
          }
        ]
        when(
          mockService.queryRelations(
            TestRelationDTO,
            'relations',
            deepEqual([dto]),
            objectContaining({ ...query, paging: { limit: 2, offset: 0 } }),
            deepEqual({ withDeleted: undefined })
          )
        ).thenResolve(new Map([[dto, output]]))
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const result = await resolver.queryRelations(dto, query, {})
        return expect(result).toEqual({
          edges: [
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
              node: {
                id: output[0].id,
                testResolverId: dto.id
              }
            }
          ],
          pageInfo: {
            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: 'YXJyYXljb25uZWN0aW9uOjA='
          },
          totalCountFn: expect.any(Function)
        })
      })

      it('should call the service countRelations with the provided dto', async () => {
        const { resolver, mockService } = await createResolverFromNest(TestResolver)
        const dto: TestResolverDTO = {
          id: 'id-1',
          stringField: 'foo'
        }
        const query: CursorQueryArgsType<TestRelationDTO> = {
          filter: { id: { eq: 'id-2' } },
          paging: { first: 1 }
        }
        const output: TestRelationDTO[] = [
          {
            id: 'id-2',
            testResolverId: dto.id
          }
        ]
        when(
          mockService.queryRelations(
            TestRelationDTO,
            'relations',
            deepEqual([dto]),
            objectContaining({ ...query, paging: { limit: 2, offset: 0 } }),
            deepEqual({ withDeleted: undefined })
          )
        ).thenResolve(new Map([[dto, output]]))
        const partialResolveInfoWithTotalCount = {
          fields: { totalCount: {} }
        } as Partial<QueryResolveTree<OffsetConnectionType<TestResolverDTO>>>

        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const result = await resolver.queryRelations(dto, query, {}, {}, { info: partialResolveInfoWithTotalCount })
        when(
          mockService.countRelations(
            TestRelationDTO,
            'relations',
            deepEqual([dto]),
            objectContaining(query.filter),
            deepEqual({ withDeleted: undefined })
          )
        ).thenResolve(new Map([[dto, 10]]))

        return expect(result.totalCount).resolves.toBe(10)
      })

      it('should call the service findRelation with the provided dto and correct relation name', async () => {
        const { resolver, mockService } = await createResolverFromNest(TestResolver)
        const dto: TestResolverDTO = {
          id: 'id-1',
          stringField: 'foo'
        }
        const query: CursorQueryArgsType<TestRelationDTO> = {
          filter: { id: { eq: 'id-2' } },
          paging: { first: 1 }
        }
        const output: TestRelationDTO[] = [
          {
            id: 'id-2',
            testResolverId: dto.id
          }
        ]
        when(
          mockService.queryRelations(
            TestRelationDTO,
            'others',
            deepEqual([dto]),
            objectContaining({ ...query, paging: { limit: 2, offset: 0 } }),
            deepEqual({ withDeleted: undefined })
          )
        ).thenResolve(new Map([[dto, output]]))
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const result = await resolver.queryCustoms(dto, query, {})
        return expect(result).toEqual({
          edges: [
            {
              cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
              node: {
                id: output[0].id,
                testResolverId: dto.id
              }
            }
          ],
          pageInfo: {
            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: 'YXJyYXljb25uZWN0aW9uOjA='
          },
          totalCountFn: expect.any(Function)
        })
      })
    })

    describe('many limit offset query', () => {
      @Resolver(() => TestResolverDTO)
      class TestResolver extends ReadRelationsResolver(TestResolverDTO, {
        one: { relation: { DTO: TestRelationDTO }, custom: { DTO: TestRelationDTO, relationName: 'other' } },
        many: {
          relations: { DTO: TestRelationDTO, pagingStrategy: PagingStrategies.OFFSET },
          customs: { DTO: TestRelationDTO, relationName: 'others', pagingStrategy: PagingStrategies.OFFSET }
        }
      }) {
        constructor(service: TestService) {
          super(service)
        }
      }

      it('should call the service queryRelations with the provided dto', async () => {
        const { resolver, mockService } = await createResolverFromNest(TestResolver)
        const dto: TestResolverDTO = {
          id: 'id-1',
          stringField: 'foo'
        }
        const query: OffsetQueryArgsType<TestRelationDTO> = {
          filter: { id: { eq: 'id-2' } },
          paging: { limit: 1 }
        }
        const output: TestRelationDTO[] = [
          {
            id: 'id-2',
            testResolverId: dto.id
          }
        ]
        when(
          mockService.queryRelations(
            TestRelationDTO,
            'relations',
            deepEqual([dto]),
            objectContaining({ ...query, paging: { limit: 2 } }),
            deepEqual({ withDeleted: undefined })
          )
        ).thenResolve(new Map([[dto, output]]))
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const result = await resolver.queryRelations(dto, query, {})
        return expect(result).toEqual({
          nodes: output,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false
          },
          totalCountFn: expect.any(Function)
        })
      })

      it('should call the service findRelation with the provided dto and correct relation name', async () => {
        const { resolver, mockService } = await createResolverFromNest(TestResolver)
        const dto: TestResolverDTO = {
          id: 'id-1',
          stringField: 'foo'
        }
        const query: OffsetQueryArgsType<TestRelationDTO> = {
          filter: { id: { eq: 'id-2' } },
          paging: { limit: 1 }
        }
        const output: TestRelationDTO[] = [
          {
            id: 'id-2',
            testResolverId: dto.id
          }
        ]
        when(
          mockService.queryRelations(
            TestRelationDTO,
            'others',
            deepEqual([dto]),
            objectContaining({ ...query, paging: { limit: 2 } }),
            deepEqual({ withDeleted: undefined })
          )
        ).thenResolve(new Map([[dto, output]]))
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const result = await resolver.queryCustoms(dto, query, {})
        return expect(result).toEqual({
          nodes: output,
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false
          },
          totalCountFn: expect.any(Function)
        })
      })
    })

    describe('many limit no paging', () => {
      @Resolver(() => TestResolverDTO)
      class TestResolver extends ReadRelationsResolver(TestResolverDTO, {
        one: { relation: { DTO: TestRelationDTO }, custom: { DTO: TestRelationDTO, relationName: 'other' } },
        many: {
          relations: { DTO: TestRelationDTO, pagingStrategy: PagingStrategies.NONE },
          customs: { DTO: TestRelationDTO, pagingStrategy: PagingStrategies.NONE, relationName: 'others' }
        }
      }) {
        constructor(service: TestService) {
          super(service)
        }
      }

      it('should call the service queryRelations with the provided dto', async () => {
        const { resolver, mockService } = await createResolverFromNest(TestResolver)
        const dto: TestResolverDTO = {
          id: 'id-1',
          stringField: 'foo'
        }
        const query: NonePagingQueryArgsType<TestRelationDTO> = {
          filter: { id: { eq: 'id-2' } }
        }
        const output: TestRelationDTO[] = [
          {
            id: 'id-2',
            testResolverId: dto.id
          }
        ]
        when(
          mockService.queryRelations(
            TestRelationDTO,
            'relations',
            deepEqual([dto]),
            objectContaining({ ...query }),
            deepEqual({ withDeleted: undefined })
          )
        ).thenResolve(new Map([[dto, output]]))
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const result = await resolver.queryRelations(dto, query, {})
        return expect(result).toEqual(output)
      })

      it('should call the service findRelation with the provided dto and correct relation name', async () => {
        const { resolver, mockService } = await createResolverFromNest(TestResolver)
        const dto: TestResolverDTO = {
          id: 'id-1',
          stringField: 'foo'
        }
        const query: OffsetQueryArgsType<TestRelationDTO> = {
          filter: { id: { eq: 'id-2' } }
        }
        const output: TestRelationDTO[] = [
          {
            id: 'id-2',
            testResolverId: dto.id
          }
        ]
        when(
          mockService.queryRelations(
            TestRelationDTO,
            'others',
            deepEqual([dto]),
            objectContaining(query),
            deepEqual({ withDeleted: undefined })
          )
        ).thenResolve(new Map([[dto, output]]))
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const result = await resolver.queryCustoms(dto, query, {})
        return expect(result).toEqual(output)
      })
    })
  })
})
