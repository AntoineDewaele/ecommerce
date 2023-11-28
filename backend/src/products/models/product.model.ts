import {Entity, Column, OneToMany} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { PaginatedEntityModel } from '../../pagination/models/paginated-entity.model';
import {ProductImage} from "../../product-images/models/product-image.model";

@Entity()
@ObjectType()
export class Product extends PaginatedEntityModel {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => Boolean)
  @Column({ default: true })
  isActive: boolean;

  @Field(() => [ProductImage])
  @OneToMany(() => ProductImage, productImage => productImage.product)
  images: ProductImage[];
}
