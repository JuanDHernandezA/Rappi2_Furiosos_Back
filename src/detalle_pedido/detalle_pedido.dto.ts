import { ApiProperty } from '@nestjs/swagger';
import { MenuEntity } from 'src/menu/menu.entity';
import { PedidoEntity } from 'src/pedido/pedido.entity';
import { ProductoEntity } from 'src/producto/producto.entity';

export class DetallePedidoDTO {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  fk_idPedido: PedidoEntity;

  @ApiProperty()
  fk_idProducto: ProductoEntity;

  @ApiProperty()
  fk_idMenu: MenuEntity;

  @ApiProperty()
  readonly q_cantidad: number;

  @ApiProperty()
  readonly v_precio: number;

  constructor(
    fk_idPedido: PedidoEntity,
    fk_idProducto: ProductoEntity,
    fk_idMenu: MenuEntity,
    q_cantidad: number,
    v_precio: number,
  ) {
    this.fk_idPedido = fk_idPedido;
    this.fk_idProducto = fk_idProducto;
    this.fk_idMenu = fk_idMenu;
    this.q_cantidad = q_cantidad;
    this.v_precio = v_precio;
  }
}
