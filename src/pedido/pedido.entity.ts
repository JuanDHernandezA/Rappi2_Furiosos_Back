import { ClienteEntity } from 'src/cliente/cliente.entity';
import { DetallePedidoEntity } from 'src/detalle_pedido/detalle_pedido.entity';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Pedido')
export class PedidoEntity {
  @PrimaryGeneratedColumn('increment')
  readonly pk_idPedido: number;

  @Column()
  readonly v_monto: number;

  @Column()
  readonly a_direccion: string;

  @Column()
  readonly f_fecha: Date;

  @ManyToOne(() => ClienteEntity, (cliente) => cliente.pedidos)
  readonly cliente: ClienteEntity;

  @ManyToMany(() => RestauranteEntity, (restaurante) => restaurante.pedidos)
  @JoinTable()
  readonly restaurantes: RestauranteEntity[];

  @OneToMany(() => DetallePedidoEntity, (detalle) => detalle.fk_idPedido)
  readonly detalles: DetallePedidoEntity[];

  constructor(
    pk_idPedido: number,
    v_monto: number,
    a_direccion: string,
    f_fecha: Date,
    cliente: ClienteEntity,
    restaurantes: RestauranteEntity[],
  ) {
    this.pk_idPedido = pk_idPedido;
    this.v_monto = v_monto;
    this.a_direccion = a_direccion;
    this.f_fecha = f_fecha;
    this.cliente = cliente;
    this.restaurantes = restaurantes;
  }
}
