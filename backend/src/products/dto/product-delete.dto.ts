import { Product } from '../models/product.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductDeleteOutput {
  @Field(() => ID)
  id: Product['id'];
}
