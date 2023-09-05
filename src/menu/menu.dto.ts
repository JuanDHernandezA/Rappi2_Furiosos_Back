import { ApiProperty } from '@nestjs/swagger';
import DatabaseFile from 'src/producto/databaseFile.entity';
import { ProductoEntity } from 'src/producto/producto.entity';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';

export class MenuDTO {
  @ApiProperty()
  pk_idMenu?: number;

  @ApiProperty()
  readonly n_nombre: string;

  @ApiProperty()
  readonly v_personalizable: boolean;

  @ApiProperty()
  readonly i_foto?: DatabaseFile;

  @ApiProperty()
  public i_fotoId?: number;

  @ApiProperty()
  readonly v_precio: number;

  @ApiProperty()
  readonly productos: ProductoEntity[];

  @ApiProperty()
  readonly restaurantes: RestauranteEntity;

  constructor(
    pk_idMenu: number,
    n_nombre: string,
    v_personalizable: boolean,
    v_precio: number,
    restaurantes: RestauranteEntity,
    productos: ProductoEntity[],
    i_foto?: DatabaseFile,
    i_fotoId?: number,
  ) {
    this.pk_idMenu = pk_idMenu;
    this.n_nombre = n_nombre;
    this.v_personalizable = v_personalizable;
    this.v_precio = v_precio;
    this.productos = productos;
    this.restaurantes = restaurantes;
    this.i_foto = i_foto;
    this.i_fotoId = i_fotoId;
  }
}
