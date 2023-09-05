import { Injectable } from '@nestjs/common';
import { IngredienteDTO } from './ingrediente.dto';
import { IngredienteEntity } from './ingrediente.entity';
import { IngredienteMapper } from './ingrediente.mapper';
import { IngredienteRepository } from './ingrediente.repository';

@Injectable()
export class IngredienteService {
  constructor(
    private tipoUnidadRepository: IngredienteRepository,
    private mapper: IngredienteMapper,
  ) {}

  async getAll(): Promise<IngredienteDTO[]> {
    const tipoUnidad: IngredienteEntity[] =
      await this.tipoUnidadRepository.getAll();
    return tipoUnidad.map((tipoUnidad) => this.mapper.entityToDto(tipoUnidad));
  }

  async getById(id: number): Promise<IngredienteDTO> {
    const tipoUnidad: IngredienteEntity =
      await this.tipoUnidadRepository.getById(id);
    return this.mapper.entityToDto(tipoUnidad);
  }

  async new(tipoUnidadDTO: IngredienteDTO): Promise<IngredienteDTO> {
    const newUser: IngredienteEntity = await this.tipoUnidadRepository.new(
      tipoUnidadDTO,
    );
    return this.mapper.entityToDto(newUser);
  }

  async update(
    id: number,
    tipoUnidadDTO: IngredienteDTO,
  ): Promise<IngredienteDTO> {
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
