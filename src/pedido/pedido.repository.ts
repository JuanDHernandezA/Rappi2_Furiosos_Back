import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { PedidoDTO } from './pedido.dto';
import { PedidoEntity } from './pedido.entity';
import { PedidoMapper } from './pedido.mapper';

@Injectable()
export class PedidoRepository {
  constructor(
    @InjectRepository(PedidoEntity)
    private pedidoEntity: Repository<PedidoEntity>,
    private mapper: PedidoMapper,
  ) {}

  getAll(): Promise<PedidoEntity[]> {
    return this.pedidoEntity.find({
      relations: { restaurantes: true, detalles: true, cliente: true },
    });
  }

  getById(id: number): Promise<PedidoEntity> {
    return this.pedidoEntity.findOne({
      where: { pk_idPedido: id },
      relations: { restaurantes: true, detalles: true, cliente: true },
    });
  }

  new(pedidoDTO: PedidoDTO): Promise<PedidoEntity> {
    const newPedido = this.mapper.dtoToEntity(pedidoDTO);
    return this.pedidoEntity.save(newPedido);
  }

  async update(pedidoDTO: PedidoDTO, id: number): Promise<PedidoEntity> {
    pedidoDTO.pk_idPedido = id;
    const updateMenu = this.mapper.dtoToEntity(pedidoDTO);
    await this.pedidoEntity.update(id, updateMenu);
    return this.pedidoEntity.findOne({ where: { pk_idPedido: id } });
  }

  delete(id: number): Promise<DeleteResult> {
    return this.pedidoEntity.delete(id);
  }
}
