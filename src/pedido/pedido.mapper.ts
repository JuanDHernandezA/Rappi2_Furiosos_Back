import { Injectable } from '@nestjs/common';
import { PedidoDTO } from './pedido.dto';
import { PedidoEntity } from './pedido.entity';

@Injectable()
export class PedidoMapper {
  dtoToEntity(pedidoDTO: PedidoDTO): PedidoEntity {
    return new PedidoEntity(
      pedidoDTO.pk_idPedido,
      pedidoDTO.v_monto,
      pedidoDTO.a_direccion,
      pedidoDTO.f_fecha,
      pedidoDTO.cliente,
      pedidoDTO.restaurantes,
    );
  }

  entityToDto(pedidoEntity: PedidoEntity): PedidoDTO {
    return new PedidoDTO(
      pedidoEntity.pk_idPedido,
      pedidoEntity.v_monto,
      pedidoEntity.a_direccion,
      pedidoEntity.f_fecha,
      pedidoEntity.cliente,
      pedidoEntity.restaurantes,
    );
  }
}
