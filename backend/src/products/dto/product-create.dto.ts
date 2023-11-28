import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Product } from '../models/product.model';
import {ProductImageCreateInput, ProductImageCreateOutput} from "../../product-images/dto/product-image-create.dto";
import {CrudCreateInput, CrudCreateOutput} from "../../crud/dto/crud-create.dto";

@InputType()
export class ProductCreateInput extends CrudCreateInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Boolean)
  isActive: boolean;

  @Field(() => [ProductImageCreateInput], {nullable: true})
  images?: ProductImageCreateInput[];
}

@ObjectType()
export class ProductCreateOutput extends CrudCreateOutput {
  @Field(() => Product, { nullable: true })
  product?: Product;
  images?: [ProductImageCreateOutput]
}
