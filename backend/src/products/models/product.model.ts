import { Entity, Column} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { PaginatedEntityModel } from '../../pagination/models/paginated-entity.model';

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
}
