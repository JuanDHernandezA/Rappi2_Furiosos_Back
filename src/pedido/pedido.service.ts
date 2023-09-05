import { Injectable } from '@nestjs/common';
import { PedidoDTO } from './pedido.dto';
import { PedidoEntity } from './pedido.entity';
import { PedidoMapper } from './pedido.mapper';
import { PedidoRepository } from './pedido.repository';

@Injectable()
export class PedidoService {
  constructor(
    private pedidoRepository: PedidoRepository,
    private mapper: PedidoMapper,
  ) {}

  async getAll(): Promise<PedidoDTO[]> {
    const pedidoEntity: PedidoEntity[] = await this.pedidoRepository.getAll();
    return pedidoEntity.map((pedido) => this.mapper.entityToDto(pedido));
  }

  async getById(id: number): Promise<PedidoDTO> {
    const pedidoEntity: PedidoEntity = await this.pedidoRepository.getById(id);
    return this.mapper.entityToDto(pedidoEntity);
  }

  async new(pedidoDTO: PedidoDTO): Promise<PedidoDTO> {
    const newPedido: PedidoEntity = await this.pedidoRepository.new(pedidoDTO);
    return this.mapper.entityToDto(newPedido);
  }

  async update(id: number, pedidoDTO: PedidoDTO): Promise<PedidoDTO> {
    const updatePedido = await this.pedidoRepository.update(pedidoDTO, id);
    return this.mapper.entityToDto(updatePedido);
  }

  async delete(id: number): Promise<void> {
    await this.pedidoRepository.delete(id);
  }
}
