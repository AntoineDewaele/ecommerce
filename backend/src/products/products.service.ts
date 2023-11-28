import { Injectable } from '@nestjs/common';
import { Product } from './models/product.model';
import { CrudService } from '../crud/crud.service';
import {ProductImageCreateInput} from "../product-images/dto/product-image-create.dto";
import {ProductImage} from "../product-images/models/product-image.model";
import {DeepPartial, Repository} from "typeorm";
import {ProductImagesService} from "../product-images/product-images.service";
import {ProductCreateInput, ProductCreateOutput} from "./dto/product-create.dto";

@Injectable()
export class ProductsService extends CrudService<Product>(Product, 'product') {
    constructor(private productImagesService: ProductImagesService) {
        super();
    }

    async create(inputDto: ProductCreateInput): Promise<ProductCreateOutput> {
        let product: ProductCreateOutput = await super.create(inputDto);

        product.images = this.createProductImages(inputDto.images);

        return product;
    }

    private async createProductImages(images: ProductImageCreateInput[]) {
        for (const image in images) {
            await this.productImagesService.create(images);
        }
    }
}
