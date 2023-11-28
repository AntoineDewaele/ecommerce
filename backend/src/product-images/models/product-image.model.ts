import {Entity, Column, ManyToOne} from 'typeorm';
import {Field, ID, ObjectType} from '@nestjs/graphql';
import { PaginatedEntityModel } from '../../pagination/models/paginated-entity.model';
import {Product} from "../../products/models/product.model";

@Entity()
@ObjectType()
export class ProductImage extends PaginatedEntityModel {
  @Field(() => String)
  @Column()
  url: string;

  @Field(() => Boolean)
  @Column({ default: true })
  isActive: boolean;

  @Field(() => Product)
  @ManyToOne(() => Product, product => product.images)
  product: Product;
}
