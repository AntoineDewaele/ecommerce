import { ProductsService } from '../products.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  ProductCreateInput,
  ProductCreateOutput,
} from '../dto/product-create.dto';
import { Product } from '../models/product.model';

@Resolver(Product)
export class ProductMutationsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Mutation(() => ProductCreateOutput)
  async productCreate(@Args('input') input: ProductCreateInput) {
    return this.productService.create(input);
  }
}
