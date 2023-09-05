import { ApiProperty } from '@nestjs/swagger';
import { ClienteEntity } from 'src/cliente/cliente.entity';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';

export class PedidoDTO {
  @ApiProperty()
  pk_idPedido?: number;

  @ApiProperty()
  readonly v_monto: number;

  @ApiProperty()
  readonly a_direccion: string;

  @ApiProperty()
  readonly f_fecha: Date;

  @ApiProperty()
  public cliente: ClienteEntity;

  @ApiProperty()
  readonly restaurantes: RestauranteEntity[];

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
