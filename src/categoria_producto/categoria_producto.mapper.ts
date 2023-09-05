import { Injectable } from '@nestjs/common';
import { CategoriaProductoDTO } from './categoria_producto.dto';
import { CategoriaProductoEntity } from './categoria_producto.entity';

@Injectable()
export class CategoriaProductoMapper {
  dtoToEntity(ingedienteDTO: CategoriaProductoDTO): CategoriaProductoEntity {
    return new CategoriaProductoEntity(
      ingedienteDTO.pk_idCategoria,
      ingedienteDTO.n_nombre,
    );
  }

  entityToDto(
    ingredienteEntity: CategoriaProductoEntity,
  ): CategoriaProductoDTO {
    return new CategoriaProductoDTO(
      ingredienteEntity.pk_idCategoria,
      ingredienteEntity.n_nombre,
    );
  }
}
