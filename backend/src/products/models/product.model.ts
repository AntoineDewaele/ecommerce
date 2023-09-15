import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Product extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

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
