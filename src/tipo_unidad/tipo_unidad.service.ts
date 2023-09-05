import { Injectable } from '@nestjs/common';
import { TipoUnidadDTO } from './tipo_unidad.dto';
import { TipoUnidadEntity } from './tipo_unidad.entity';
import { TipoUnidadMapper } from './tipo_unidad.mapper';
import { TipoUnidadRepository } from './tipo_unidad.repository';

@Injectable()
export class TipoUnidadService {
  constructor(
    private tipoUnidadRepository: TipoUnidadRepository,
    private mapper: TipoUnidadMapper,
  ) {}

  async getAll(): Promise<TipoUnidadDTO[]> {
    const tipoUnidad: TipoUnidadEntity[] =
      await this.tipoUnidadRepository.getAll();
    return tipoUnidad.map((tipoUnidad) => this.mapper.entityToDto(tipoUnidad));
  }

  async getById(id: number): Promise<TipoUnidadDTO> {
    const tipoUnidad: TipoUnidadEntity =
      await this.tipoUnidadRepository.getById(id);
    return this.mapper.entityToDto(tipoUnidad);
  }

  async new(tipoUnidadDTO: TipoUnidadDTO): Promise<TipoUnidadDTO> {
    const newUser: TipoUnidadEntity = await this.tipoUnidadRepository.new(
      tipoUnidadDTO,
    );
    return this.mapper.entityToDto(newUser);
  }

  async update(
    id: number,
    tipoUnidadDTO: TipoUnidadDTO,
  ): Promise<TipoUnidadDTO> {
    const updateUser = await this.tipoUnidadRepository.update(
      tipoUnidadDTO,
      id,
    );
    return this.mapper.entityToDto(updateUser);
  }

  async delete(id: number): Promise<void> {
    await this.tipoUnidadRepository.delete(id);
  }
}
