import { ApiProperty } from '@nestjs/swagger';
import { TipoUnidadEntity } from 'src/tipo_unidad/tipo_unidad.entity';

export class IngredienteDTO {
  @ApiProperty()
  pk_idIngrediente?: number;

  @ApiProperty()
  readonly q_unidades: number;

  @ApiProperty()
  readonly fk_idUnidad: TipoUnidadEntity;

  @ApiProperty()
  readonly n_nombre: string;

  constructor(
    pk_idIngrediente: number,
    q_unidades: number,
    fk_idUnidad: TipoUnidadEntity,
    n_nombre: string,
  ) {
    this.pk_idIngrediente = pk_idIngrediente;
    this.q_unidades = q_unidades;
    this.fk_idUnidad = fk_idUnidad;
    this.n_nombre = n_nombre;
  }
}
