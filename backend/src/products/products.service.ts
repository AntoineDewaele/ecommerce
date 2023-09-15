import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './models/product.model';
import { Repository } from 'typeorm';
import {ProductCreateInput, ProductCreateOutput} from "./dto/product-create.dto";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  all(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async create(input: ProductCreateInput): Promise<ProductCreateOutput> {
    let product = this.productRepository.create(input);
    product = await this.productRepository.save(product);
    return { product };
  }
}
