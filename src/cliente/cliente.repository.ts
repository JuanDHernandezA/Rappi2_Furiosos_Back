import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ClienteDTO } from './cliente.dto';
import { ClienteEntity } from './cliente.entity';
import { ClienteMapper } from './cliente.mapper';

@Injectable()
export class ClienteRepository {
  constructor(
    @InjectRepository(ClienteEntity)
    private clienteEntity: Repository<ClienteEntity>,
    private mapper: ClienteMapper,
  ) {}

  getAll(): Promise<ClienteEntity[]> {
    return this.clienteEntity.find();
  }

  getById(id: number): Promise<ClienteEntity> {
    return this.clienteEntity.findOne({
      relations: { pedidos: true },
      where: { pk_identificador: id },
    });
  }

  new(clienteDTO: ClienteDTO): Promise<ClienteEntity> {
    const newCliente = this.mapper.dtoToEntity(clienteDTO);
    return this.clienteEntity.save(newCliente);
  }

  async update(clienteDTO: ClienteDTO, id: number): Promise<ClienteEntity> {
    clienteDTO.pk_identificador = id;
    const updateUser = this.mapper.dtoToEntity(clienteDTO);
    await this.clienteEntity.update(id, updateUser);
    return this.clienteEntity.findOne({ where: { pk_identificador: id } });
  }

  delete(id: number): Promise<DeleteResult> {
    return this.clienteEntity.delete(id);
  }
}
