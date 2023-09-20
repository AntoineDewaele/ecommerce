import { ProductsService } from '../products.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Product } from '../models/product.model';
import {
  ProductPaginationArgs,
  ProductsPagination,
} from '../dto/products-pagination.dto';

@Resolver(Product)
export class ProductQueriesResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query(() => ProductsPagination)
  async productPagination(@Args() args: ProductPaginationArgs) {
    return this.productService.pagination(args);
  }
}
