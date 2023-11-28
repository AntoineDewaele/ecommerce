import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {ProductImage} from "../models/product-image.model";

@InputType()
export class ProductImageCreateInput {
  @Field(() => String)
  url: string;
}

@ObjectType()
export class ProductImageCreateOutput {
  @Field(() => ProductImage, { nullable: true })
  productImage?: ProductImage;
}
