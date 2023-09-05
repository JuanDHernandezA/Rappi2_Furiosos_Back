import { Injectable } from '@nestjs/common';
import { CategoriaProductoDTO } from './categoria_producto.dto';
import { CategoriaProductoEntity } from './categoria_producto.entity';
import { CategoriaProductoMapper } from './categoria_producto.mapper';
import { CategoriaProductoRepository } from './categoria_producto.repository';

@Injectable()
export class CategoriaProductoService {
  constructor(
    private categoriaProductoRepository: CategoriaProductoRepository,
    private mapper: CategoriaProductoMapper,
  ) {}

  async getAll(): Promise<CategoriaProductoDTO[]> {
    const categoriaProducto: CategoriaProductoEntity[] =
      await this.categoriaProductoRepository.getAll();
    return categoriaProducto.map((categoriaProducto) =>
      this.mapper.entityToDto(categoriaProducto),
    );
  }

  async getById(id: number): Promise<CategoriaProductoDTO> {
    const categoriaProducto: CategoriaProductoEntity =
      await this.categoriaProductoRepository.getById(id);
    return this.mapper.entityToDto(categoriaProducto);
  }

  async new(
    categoriaProductoDTO: CategoriaProductoDTO,
  ): Promise<CategoriaProductoDTO> {
    const newUser: CategoriaProductoEntity =
      await this.categoriaProductoRepository.new(categoriaProductoDTO);
    return this.mapper.entityToDto(newUser);
  }

  async update(
    id: number,
    categoriaProductoDTO: CategoriaProductoDTO,
  ): Promise<CategoriaProductoDTO> {
    const updateUser = await this.categoriaProductoRepository.update(
      categoriaProductoDTO,
      id,
    );
    return this.mapper.entityToDto(updateUser);
  }

  async delete(id: number): Promise<void> {
    await this.categoriaProductoRepository.delete(id);
  }
}
