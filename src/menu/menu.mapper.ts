import { Injectable } from '@nestjs/common';
import { MenuDTO } from './menu.dto';
import { MenuEntity } from './menu.entity';

@Injectable()
export class MenuMapper {
  dtoToEntity(restauranteDTO: MenuDTO): MenuEntity {
    return new MenuEntity(
      restauranteDTO.pk_idMenu,
      restauranteDTO.n_nombre,
      restauranteDTO.v_personalizable,
      restauranteDTO.v_precio,
      restauranteDTO.restaurantes,
      restauranteDTO.productos,
      restauranteDTO.i_foto,
      restauranteDTO.i_fotoId,
    );
  }

  entityToDto(restauranteEntity: MenuEntity): MenuDTO {
    return new MenuDTO(
      restauranteEntity.pk_idMenu,
      restauranteEntity.n_nombre,
      restauranteEntity.v_personalizable,
      restauranteEntity.v_precio,
      restauranteEntity.restaurantes,
      restauranteEntity.productos,
      restauranteEntity.i_foto,
      restauranteEntity.i_fotoId,
    );
  }
}
