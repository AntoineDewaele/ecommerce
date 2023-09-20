import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { Product } from '../models/product.model';
import {
  Pagination,
  PaginationArgs,
  PaginationSortBy,
  SortDirection,
} from '../../pagination/dto/pagination.dto';

@InputType()
export class ProductPaginationSortBy extends PaginationSortBy {
  @Field(() => SortDirection, { nullable: true })
  name?: SortDirection;

  @Field(() => SortDirection, { nullable: true })
  description?: SortDirection;
}

@ArgsType()
export class ProductPaginationArgs extends PaginationArgs {
  @Field(() => ProductPaginationSortBy, { nullable: true })
  sortBy?: ProductPaginationSortBy;
}

@ObjectType()
export class ProductsPagination extends Pagination {
  @Field(() => [Product])
  data: Product[];
}
