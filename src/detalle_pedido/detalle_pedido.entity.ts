import { MenuEntity } from 'src/menu/menu.entity';
import { PedidoEntity } from 'src/pedido/pedido.entity';
import { ProductoEntity } from 'src/producto/producto.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('Detalle_Pedido')
export class DetallePedidoEntity {
  @PrimaryColumn({ type: 'int' })
  @ManyToOne(() => PedidoEntity, (pedido) => pedido.detalles)
  readonly fk_idPedido: PedidoEntity;

  @PrimaryColumn({ type: 'int' })
  @ManyToOne(() => ProductoEntity, (producto) => producto.detalles)
  readonly fk_idProducto: ProductoEntity;

  @PrimaryColumn({ type: 'int' })
  @ManyToOne(() => MenuEntity, (menu) => menu.detalles)
  readonly fk_idMenu: MenuEntity;

  @Column()
  readonly q_cantidad: number;

  @Column()
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
