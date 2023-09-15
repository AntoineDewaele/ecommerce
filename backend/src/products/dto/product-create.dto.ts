import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Product } from '../models/product.model';

@InputType()
export class ProductCreateInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Boolean)
  isActive: boolean;
}

@ObjectType()
export class ProductCreateOutput {
  @Field(() => Product)
  product: Product;
}
