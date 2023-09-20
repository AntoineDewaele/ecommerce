import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  Pagination,
  PaginationArgs,
  SortDirection,
} from './pagination/dto/pagination.dto';
import { Type } from '@nestjs/common';
import { PaginatedEntityModel } from './pagination/models/paginated-entity.model';

export interface ICrudService<T> {
  readonly repository: Repository<T>;
  pagination(args: PaginationArgs): Promise<Pagination>;
  create(inputDto: any): Promise<any>;
  update(id: any, inputDto: any): Promise<any>;
  delete(id: any): Promise<any>;
}

type Constructor<I> = new (...args: any[]) => I;

export function CrudService<T extends PaginatedEntityModel>(
  entity: Constructor<T>,
  promisePropertyName = 'model',
): Type<ICrudService<T>> {
  class CrudServiceHost implements ICrudService<T> {
    @InjectRepository(entity) readonly repository: Repository<T>;

    async pagination(args: PaginationArgs): Promise<Pagination> {
      const qb = this.repository.createQueryBuilder();
      qb.take(args.take);
      qb.skip(args.skip);

      Object.entries(args.sortBy).forEach(([key, value]) => {
        if (value) {
          qb.addOrderBy(key, value === SortDirection.ASC ? 'ASC' : 'DESC');
        }
      });
      const [data, totalCount] = await qb.getManyAndCount();

      return { data, totalCount };
    }

    async create(inputDto: any): Promise<any> {
      let model = this.repository.create(inputDto);
      model = await this.repository.save(model);
      return { [promisePropertyName]: model };
    }

    async update(id: any, inputDto: any): Promise<any> {
      await this.repository.update(id, inputDto);

      const model = await this.repository.findOne({
        where: { id: id },
      });

      return { [promisePropertyName]: model };
    }

    async delete(id: any): Promise<any> {
      await this.repository.delete(id);

      return { id };
    }
  }

  return CrudServiceHost;
}
