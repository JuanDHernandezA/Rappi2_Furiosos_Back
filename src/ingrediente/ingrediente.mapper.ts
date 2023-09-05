import { Injectable } from '@nestjs/common';
import { IngredienteDTO } from './ingrediente.dto';
import { IngredienteEntity } from './ingrediente.entity';

@Injectable()
export class IngredienteMapper {
  dtoToEntity(ingedienteDTO: IngredienteDTO): IngredienteEntity {
    return new IngredienteEntity(
      ingedienteDTO.pk_idIngrediente,
      ingedienteDTO.q_unidades,
      ingedienteDTO.fk_idUnidad,
      ingedienteDTO.n_nombre,
    );
  }

  entityToDto(ingredienteEntity: IngredienteEntity): IngredienteDTO {
    return new IngredienteDTO(
      ingredienteEntity.pk_idIngrediente,
      ingredienteEntity.q_unidades,
      ingredienteEntity.fk_idUnidad,
      ingredienteEntity.n_nombre,
    );
  }
}
