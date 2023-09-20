import {
  ArgsType,
  Field,
  InputType,
  Int,
  InterfaceType,
  registerEnumType,
} from '@nestjs/graphql';
import { PaginatedEntityModel } from '../models/paginated-entity.model';
import { ProductPaginationSortBy } from '../../products/dto/products-pagination.dto';

export enum SortDirection {
  ASC,
  DESC,
}

registerEnumType(SortDirection, { name: 'SortDirection' });

@InputType()
export class PaginationSortBy {
  @Field(() => SortDirection, { nullable: true })
  created_at: SortDirection;
}

@ArgsType()
export class PaginationArgs {
  @Field(() => Int)
  skip: number;

  @Field(() => Int)
  take: number;

  @Field(() => PaginationSortBy, { nullable: true })
  sortBy?: PaginationSortBy;
}

@InterfaceType()
export abstract class Pagination<
  N extends PaginatedEntityModel = PaginatedEntityModel,
> {
  @Field()
  totalCount: number;

  @Field(() => [PaginatedEntityModel])
  abstract data: N[];
}
