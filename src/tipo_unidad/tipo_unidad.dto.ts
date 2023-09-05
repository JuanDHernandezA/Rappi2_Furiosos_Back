import { ApiProperty } from '@nestjs/swagger';

export class TipoUnidadDTO {
  @ApiProperty()
  pk_idUnidad?: number;

  @ApiProperty()
  readonly n_nombre_unidad: string;

  @ApiProperty()
  readonly n_sigla: string;

  constructor(pk_idUnidad: number, n_nombre_unidad: string, n_sigla: string) {
    this.pk_idUnidad = pk_idUnidad;
    this.n_nombre_unidad = n_nombre_unidad;
    this.n_sigla = n_sigla;
  }
}
