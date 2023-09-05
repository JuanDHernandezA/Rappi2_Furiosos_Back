import { Injectable } from '@nestjs/common';
import { ProductoDTO } from './producto.dto';
import { ProductoEntity } from './producto.entity';

@Injectable()
export class ProductoMapper {
  dtoToEntity(productoDTO: ProductoDTO): ProductoEntity {
    return new ProductoEntity(
      productoDTO.pk_idProducto,
      productoDTO.n_nombre,
      productoDTO.q_unidades,
      productoDTO.i_personalizable,
      productoDTO.v_precio,
      productoDTO.fk_idCategoria,
      productoDTO.ingredientes,
      productoDTO.i_foto,
      productoDTO.i_fotoId,
    );
  }

  entityToDto(productoEntity: ProductoEntity): ProductoDTO {
    return new ProductoDTO(
      productoEntity.pk_idProducto,
      productoEntity.q_unidades,
      productoEntity.n_nombre,
      productoEntity.i_personalizable,
      productoEntity.v_precio,
      productoEntity.fk_idCategoria,
      productoEntity.ingredientes,
      productoEntity.i_foto,
      productoEntity.i_fotoId,
    );
  }
}
