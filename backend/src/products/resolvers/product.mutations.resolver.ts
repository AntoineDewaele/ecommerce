import { ProductsService } from '../products.service';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import {
  ProductCreateInput,
  ProductCreateOutput,
} from '../dto/product-create.dto';
import { Product } from '../models/product.model';
import {
  ProductUpdateInput,
  ProductUpdateOutput,
} from '../dto/product-update.dto';
import { ProductDeleteOutput } from '../dto/product-delete.dto';

@Resolver(Product)
export class ProductMutationsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Mutation(() => ProductCreateOutput)
  async productCreate(@Args('input') input: ProductCreateInput) {
    let product = await this.productService.create(input);

    return product;
  }

  @Mutation(() => ProductUpdateOutput)
  async productUpdate(
    @Args({ name: 'id', type: () => ID }) id: Product['id'],
    @Args('input') input: ProductUpdateInput,
  ) {
    return this.productService.update(id, input);
  }

  @Mutation(() => ProductDeleteOutput)
  async productDelete(@Args({ name: 'id', type: () => ID }) id: Product['id']) {
    return this.productService.delete(id);
  }
}
