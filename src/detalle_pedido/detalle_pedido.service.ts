import { Injectable } from '@nestjs/common';
import { MenuEntity } from 'src/menu/menu.entity';
import { PedidoEntity } from 'src/pedido/pedido.entity';
import { ProductoEntity } from 'src/producto/producto.entity';
import { DetallePedidoDTO } from './detalle_pedido.dto';
import { DetallePedidoEntity } from './detalle_pedido.entity';
import { DetallePedidoMapper } from './detalle_pedido.mapper';
import { DetallePedidoRepository } from './detalle_pedido.repository';

@Injectable()
export class DetallePedidoService {
  constructor(
    private detallePedidoRepository: DetallePedidoRepository,
    private mapper: DetallePedidoMapper,
  ) {}

  async getAll(): Promise<DetallePedidoDTO[]> {
    const detallePedidoEntity: DetallePedidoEntity[] =
      await this.detallePedidoRepository.getAll();
    return detallePedidoEntity.map((pedido) => this.mapper.entityToDto(pedido));
  }

  async getById(
    pedido: PedidoEntity,
    producto: ProductoEntity,
    menu: MenuEntity,
  ): Promise<DetallePedidoDTO[]> {
    const detallePedidoEntity: DetallePedidoEntity[] =
      await this.detallePedidoRepository.getById(pedido, producto, menu);
    return this.mapper.entitiesToDto(detallePedidoEntity);
  }

  async new(detallePedidoDTO: DetallePedidoDTO): Promise<DetallePedidoDTO> {
    const newDetallePedido: DetallePedidoEntity =
      await this.detallePedidoRepository.new(detallePedidoDTO);
    return this.mapper.entityToDto(newDetallePedido);
  }

  async update(
    pedido: PedidoEntity,
    producto: ProductoEntity,
    menu: MenuEntity,
    detallePedidoDTO: DetallePedidoDTO,
  ): Promise<DetallePedidoDTO> {
    const updateDetallePedido = await this.detallePedidoRepository.update(
      detallePedidoDTO,
      pedido,
      producto,
      menu,
    );
    return this.mapper.entityToDto(updateDetallePedido);
  }

  async delete(
    pedido: PedidoEntity,
    producto: ProductoEntity,
    menu: MenuEntity,
  ): Promise<void> {
    await this.detallePedidoRepository.delete(pedido, producto, menu);
  }
}
