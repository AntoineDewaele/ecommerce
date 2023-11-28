import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/product.model';
import { ProductMutationsResolver } from './resolvers/product.mutations.resolver';
import { ProductQueriesResolver } from './resolvers/product.queries.resolver';
import { ProductImagesModule } from "../product-images/product-images.module";

@Module({
  imports: [TypeOrmModule.forFeature([Product]), ProductImagesModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ProductMutationsResolver,
    ProductQueriesResolver,
  ],
})
export class ProductsModule {}
