import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ProductImage} from "./models/product-image.model";
import {ProductImagesService} from "./product-images.service";

@Module({
  imports: [TypeOrmModule.forFeature([ProductImage])],
  providers: [ProductImagesService],
  exports: [ProductImagesService]
})
export class ProductImagesModule {}
