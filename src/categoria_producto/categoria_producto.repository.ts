import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CategoriaProductoDTO } from './categoria_producto.dto';
import { CategoriaProductoEntity } from './categoria_producto.entity';
import { CategoriaProductoMapper } from './categoria_producto.mapper';

@Injectable()
export class CategoriaProductoRepository {
  constructor(
    @InjectRepository(CategoriaProductoEntity)
    private ingredienteEntity: Repository<CategoriaProductoEntity>,
    private mapper: CategoriaProductoMapper,
  ) {}

  getAll(): Promise<CategoriaProductoEntity[]> {
    return this.ingredienteEntity.find();
  }

  getById(id: number): Promise<CategoriaProductoEntity> {
    return this.ingredienteEntity.findOne({
      where: { pk_idCategoria: id },
    });
  }

  new(
    categoriaProductoDTO: CategoriaProductoDTO,
  ): Promise<CategoriaProductoEntity> {
    const newTipoUnidad = this.mapper.dtoToEntity(categoriaProductoDTO);
    return this.ingredienteEntity.save(newTipoUnidad);
  }

  async update(
    categoriaProductoDTO: CategoriaProductoDTO,
    id: number,
  ): Promise<CategoriaProductoEntity> {
    categoriaProductoDTO.pk_idCategoria = id;
    const updateUser = this.mapper.dtoToEntity(categoriaProductoDTO);
    await this.ingredienteEntity.update(id, updateUser);
    return this.ingredienteEntity.findOne({ where: { pk_idCategoria: id } });
  }

  delete(id: number): Promise<DeleteResult> {
    return this.ingredienteEntity.delete(id);
  }
}
