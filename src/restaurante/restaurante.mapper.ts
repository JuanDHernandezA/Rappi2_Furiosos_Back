import { Injectable } from '@nestjs/common';
import { RestauranteDTO } from './restaurante.dto';
import { RestauranteEntity } from './restaurante.entity';

@Injectable()
export class RestauranteMapper {
  dtoToEntity(restauranteDTO: RestauranteDTO): RestauranteEntity {
    return new RestauranteEntity(
      restauranteDTO.pk_nit,
      restauranteDTO.n_nombre,
      restauranteDTO.n_telefono,
      restauranteDTO.n_correo,
      restauranteDTO.p_contrasenia,
      restauranteDTO.menus,
    );
  }

  entityToDto(restauranteEntity: RestauranteEntity): RestauranteDTO {
    return new RestauranteDTO(
      restauranteEntity.pk_nit,
      restauranteEntity.n_nombre,
      restauranteEntity.n_telefono,
      restauranteEntity.n_correo,
      restauranteEntity.p_contrasenia,
      restauranteEntity.menus,
    );
  }
}
