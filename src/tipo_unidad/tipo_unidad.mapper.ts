import { Injectable } from '@nestjs/common';
import { TipoUnidadDTO } from './tipo_unidad.dto';
import { TipoUnidadEntity } from './tipo_unidad.entity';

@Injectable()
export class TipoUnidadMapper {
  dtoToEntity(TipoUnidadDTO: TipoUnidadDTO): TipoUnidadEntity {
    return new TipoUnidadEntity(
      TipoUnidadDTO.pk_idUnidad,
      TipoUnidadDTO.n_nombre_unidad,
      TipoUnidadDTO.n_sigla,
    );
  }

  entityToDto(TipoUnidadEntity: TipoUnidadEntity): TipoUnidadDTO {
    return new TipoUnidadDTO(
      TipoUnidadEntity.pk_idUnidad,
      TipoUnidadEntity.n_nombre_unidad,
      TipoUnidadEntity.n_sigla,
    );
  }
}
