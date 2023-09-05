import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from 'src/menu/menu.entity';
import { PedidoEntity } from 'src/pedido/pedido.entity';
import { ProductoEntity } from 'src/producto/producto.entity';
import { DeleteResult, Repository } from 'typeorm';
import { DetallePedidoDTO } from './detalle_pedido.dto';
import { DetallePedidoEntity } from './detalle_pedido.entity';
import { DetallePedidoMapper } from './detalle_pedido.mapper';

@Injectable()
export class DetallePedidoRepository {
  constructor(
    @InjectRepository(DetallePedidoEntity)
    private detallePedidoEntity: Repository<DetallePedidoEntity>,
    private mapper: DetallePedidoMapper,
  ) {}

  getAll(): Promise<DetallePedidoEntity[]> {
    return this.detallePedidoEntity.find({
      relations: {
        fk_idPedido: true,
        fk_idMenu: true,
        fk_idProducto: true,
      },
    });
  }

  getById(
    pedido: PedidoEntity,
    producto: ProductoEntity,
    menu: MenuEntity,
  ): Promise<DetallePedidoEntity[]> {
    return this.detallePedidoEntity.find({
      relations: {
        fk_idPedido: true,
        fk_idMenu: true,
        fk_idProducto: true,
      },
      where: {
        fk_idPedido: { pk_idPedido: pedido.pk_idPedido },
        fk_idProducto: { pk_idProducto: producto.pk_idProducto },
        fk_idMenu: { pk_idMenu: menu.pk_idMenu },
      },
    });
  }

  new(detallePedidoDTO: DetallePedidoDTO): Promise<DetallePedidoEntity> {
    const newPedido = this.mapper.dtoToEntity(detallePedidoDTO);
    return this.detallePedidoEntity.save(newPedido);
  }

  async update(
    detallePedidoDTO: DetallePedidoDTO,
    pedido: PedidoEntity,
    producto: ProductoEntity,
    menu: MenuEntity,
  ): Promise<DetallePedidoEntity> {
    detallePedidoDTO.fk_idPedido = pedido;
    detallePedidoDTO.fk_idProducto = producto;
    detallePedidoDTO.fk_idMenu = menu;
    const updateDetallePedido = this.mapper.dtoToEntity(detallePedidoDTO);
    await this.detallePedidoEntity.update(
      {
        fk_idPedido: { pk_idPedido: pedido.pk_idPedido },
        fk_idProducto: { pk_idProducto: producto.pk_idProducto },
        fk_idMenu: { pk_idMenu: menu.pk_idMenu },
      },
      updateDetallePedido,
    );
    return this.detallePedidoEntity.findOne({
      where: {
        fk_idPedido: { pk_idPedido: pedido.pk_idPedido },
        fk_idProducto: { pk_idProducto: producto.pk_idProducto },
        fk_idMenu: { pk_idMenu: menu.pk_idMenu },
      },
    });
  }

  delete(
    pedido: PedidoEntity,
    producto: ProductoEntity,
    menu: MenuEntity,
  ): Promise<DeleteResult> {
    return this.detallePedidoEntity.delete({
      fk_idPedido: { pk_idPedido: pedido.pk_idPedido },
      fk_idProducto: { pk_idProducto: producto.pk_idProducto },
      fk_idMenu: { pk_idMenu: menu.pk_idMenu },
    });
  }
}
