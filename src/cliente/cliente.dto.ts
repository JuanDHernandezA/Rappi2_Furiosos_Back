import { ApiProperty } from '@nestjs/swagger';
import { PedidoEntity } from 'src/pedido/pedido.entity';

export class ClienteDTO {
  @ApiProperty()
  pk_identificador?: number;

  @ApiProperty()
  readonly n_nombre: string;

  @ApiProperty()
  readonly n_celular: number;

  @ApiProperty()
  readonly n_correo: string;

  @ApiProperty()
  readonly p_contrasenia: string;

  @ApiProperty()
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
