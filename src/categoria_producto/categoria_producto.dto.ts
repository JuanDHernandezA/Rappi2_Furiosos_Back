import { ApiProperty } from '@nestjs/swagger';

export class CategoriaProductoDTO {
  @ApiProperty()
  pk_idCategoria?: number;

  @ApiProperty()
  readonly n_nombre: string;

  constructor(pk_idCategoria: number, n_nombre: string) {
    this.pk_idCategoria = pk_idCategoria;
    this.n_nombre = n_nombre;
  }
}
