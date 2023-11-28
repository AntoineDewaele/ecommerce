import { Injectable } from '@nestjs/common';
import { CrudService } from '../crud/crud.service';
import {ProductImage} from "./models/product-image.model";

@Injectable()
export class ProductImagesService extends CrudService<ProductImage>(ProductImage, 'productImage') {}
