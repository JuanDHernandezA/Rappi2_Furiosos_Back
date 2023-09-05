import { MenuEntity } from 'src/menu/menu.entity';
import { PedidoEntity } from 'src/pedido/pedido.entity';
import { ProductoEntity } from 'src/producto/producto.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Restaurante')
export class RestauranteEntity {
  @PrimaryGeneratedColumn('increment')
  readonly pk_nit: number;

  @Column()
  readonly n_nombre: string;

  @Column()
  readonly n_telefono: number;

  @Column()
  readonly n_correo: string;

  @Column()
  readonly p_contrasenia: string;

  @ManyToMany(() => ProductoEntity, (producto) => producto.restaurantes)
  readonly productos: ProductoEntity[];

  @ManyToMany(() => MenuEntity, (menu) => menu.restaurantes)
  @JoinTable()
  readonly menus: MenuEntity[];

  @ManyToMany(() => PedidoEntity, (pedido) => pedido.restaurantes)
  readonly pedidos: PedidoEntity[];

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
