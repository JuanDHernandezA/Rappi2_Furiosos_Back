import { Injectable } from '@nestjs/common';
import { ClienteDTO } from './cliente.dto';
import { ClienteEntity } from './cliente.entity';
import { ClienteMapper } from './cliente.mapper';
import { ClienteRepository } from './cliente.repository';

@Injectable()
export class ClienteService {
  constructor(
    private clienteRepository: ClienteRepository,
    private mapper: ClienteMapper,
  ) {}

  async getAll(): Promise<ClienteDTO[]> {
    const clienteEntity: ClienteEntity[] =
      await this.clienteRepository.getAll();
    return clienteEntity.map((cliente) => this.mapper.entityToDto(cliente));
  }

  async getById(id: number): Promise<ClienteDTO> {
    const clienteEntity: ClienteEntity = await this.clienteRepository.getById(
      id,
    );
    return this.mapper.entityToDto(clienteEntity);
  }

  async new(clienteDTO: ClienteDTO): Promise<ClienteDTO> {
    const newUser: ClienteEntity = await this.clienteRepository.new(clienteDTO);
    return this.mapper.entityToDto(newUser);
  }

  async update(id: number, clienteDTO: ClienteDTO): Promise<ClienteDTO> {
    const updateUser = await this.clienteRepository.update(clienteDTO, id);
    return this.mapper.entityToDto(updateUser);
  }

  async delete(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }
}
