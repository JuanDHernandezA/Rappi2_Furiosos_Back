import { DetallePedidoEntity } from 'src/detalle_pedido/detalle_pedido.entity';
import DatabaseFile from 'src/producto/databaseFile.entity';
import { ProductoEntity } from 'src/producto/producto.entity';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Menu')
export class MenuEntity {
  @PrimaryGeneratedColumn('increment')
  readonly pk_idMenu: number;

  @Column()
  readonly n_nombre: string;

  @Column()
  readonly v_personalizable: boolean;

  @JoinColumn({ name: 'i_foto' })
  @OneToOne(() => DatabaseFile, {
    nullable: true,
  })
  public i_foto?: DatabaseFile;

  @Column({ nullable: true })
  public i_fotoId?: number;

  @Column()
  readonly v_precio: number;

  @ManyToMany(() => RestauranteEntity, (restaurante) => restaurante.menus)
  readonly restaurantes: RestauranteEntity;

  @ManyToMany(() => ProductoEntity, (producto) => producto.menus)
  @JoinTable()
  readonly productos: ProductoEntity[];

  @OneToMany(() => DetallePedidoEntity, (detalle) => detalle.fk_idPedido)
  readonly detalles: DetallePedidoEntity[];

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
    this.restaurantes = restaurantes;
    this.productos = productos;
    this.i_foto = i_foto;
    this.i_fotoId = i_fotoId;
  }
}
