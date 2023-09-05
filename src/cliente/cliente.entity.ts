import { PedidoEntity } from 'src/pedido/pedido.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Cliente')
export class ClienteEntity {
  @PrimaryGeneratedColumn('increment')
  readonly pk_identificador: number;

  @Column()
  readonly n_nombre: string;

  @Column()
  readonly n_celular: number;

  @Column()
  readonly n_correo: string;

  @Column()
  readonly p_contrasenia: string;

  @OneToMany(() => PedidoEntity, (pedidos) => pedidos.cliente)
  readonly pedidos: PedidoEntity[];

  constructor(
    pk_identificador: number,
    n_nombre: string,
    n_celular: number,
    n_correo: string,
    p_contrasenia: string,
  ) {
    this.pk_identificador = pk_identificador;
    this.n_nombre = n_nombre;
    this.n_celular = n_celular;
    this.n_correo = n_correo;
    this.p_contrasenia = p_contrasenia;
  }
}
