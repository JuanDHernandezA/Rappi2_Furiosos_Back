import { Injectable } from '@nestjs/common';
import { DetallePedidoDTO } from './detalle_pedido.dto';
import { DetallePedidoEntity } from './detalle_pedido.entity';

@Injectable()
export class DetallePedidoMapper {
  dtoToEntity(detallePedidoDTO: DetallePedidoDTO): DetallePedidoEntity {
    return new DetallePedidoEntity(
      detallePedidoDTO.fk_idPedido,
      detallePedidoDTO.fk_idProducto,
      detallePedidoDTO.fk_idMenu,
      detallePedidoDTO.q_cantidad,
      detallePedidoDTO.v_precio,
    );
  }

  entityToDto(detallePedidoEntity: DetallePedidoEntity): DetallePedidoDTO {
    return new DetallePedidoDTO(
      detallePedidoEntity.fk_idPedido,
      detallePedidoEntity.fk_idProducto,
      detallePedidoEntity.fk_idMenu,
      detallePedidoEntity.q_cantidad,
      detallePedidoEntity.v_precio,
    );
  }

  entitiesToDto(
    detallePedidoEntities: DetallePedidoEntity[],
  ): DetallePedidoDTO[] {
    let detalles: DetallePedidoDTO[];
    detallePedidoEntities.forEach((detalle) =>
      detalles.push(
        new DetallePedidoDTO(
          detalle.fk_idPedido,
          detalle.fk_idProducto,
          detalle.fk_idMenu,
          detalle.q_cantidad,
          detalle.v_precio,
        ),
      ),
    );
    return detallePedidoEntities;
  }
}
