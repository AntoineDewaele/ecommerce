import { Injectable } from '@nestjs/common';
import { Product } from './models/product.model';
import { CrudService } from '../base.service';

@Injectable()
export class ProductsService extends CrudService<Product>(Product, 'product') {}
