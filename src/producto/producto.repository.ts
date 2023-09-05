import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ProductoDTO } from './producto.dto';
import { ProductoEntity } from './producto.entity';
import { ProductoMapper } from './producto.mapper';

@Injectable()
export class ProductoRepository {
  constructor(
    @InjectRepository(ProductoEntity)
    private productoEntity: Repository<ProductoEntity>,
    private mapper: ProductoMapper,
  ) {}

  getAll(): Promise<ProductoEntity[]> {
    return this.productoEntity.find({
      relations: { fk_idCategoria: true, ingredientes: true, menus: true },
    });
  }

  getById(id: number): Promise<ProductoEntity> {
    return this.productoEntity.findOne({
      where: { pk_idProducto: id },
      relations: { fk_idCategoria: true, ingredientes: true, menus: true },
    });
  }

  new(productoDTO: ProductoDTO): Promise<ProductoEntity> {
    const newProducto = this.mapper.dtoToEntity(productoDTO);
    return this.productoEntity.save(newProducto);
  }

  async update(productoDTO: ProductoDTO, id: number): Promise<ProductoEntity> {
    productoDTO.pk_idProducto = id;
    const updateProducto = this.mapper.dtoToEntity(productoDTO);
    await this.productoEntity.update(id, updateProducto);
    return this.productoEntity.findOne({ where: { pk_idProducto: id } });
  }

  delete(id: number): Promise<DeleteResult> {
    return this.productoEntity.delete(id);
  }
}
