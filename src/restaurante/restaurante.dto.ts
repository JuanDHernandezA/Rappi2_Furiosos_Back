import { ApiProperty } from '@nestjs/swagger';
import { MenuEntity } from 'src/menu/menu.entity';
import { ProductoEntity } from 'src/producto/producto.entity';

export class RestauranteDTO {
  @ApiProperty()
  pk_nit?: number;

  @ApiProperty()
  readonly n_nombre: string;

  @ApiProperty()
  readonly n_telefono: number;

  @ApiProperty()
  readonly n_correo: string;

  @ApiProperty()
  readonly p_contrasenia: string;

  @ApiProperty()
  readonly productos: ProductoEntity;

  @ApiProperty()
  readonly menus: MenuEntity[];
  
  constructor(
    pk_nit: number,
    n_nombre: string,
    n_telefono: number,
    n_correo: string,
    p_contrasenia: string,
    menus: MenuEntity[],
  ) {
    this.pk_nit = pk_nit;
    this.n_nombre = n_nombre;
    this.n_telefono = n_telefono;
    this.n_correo = n_correo;
    this.p_contrasenia = p_contrasenia;
    this.menus = menus;
  }
}
