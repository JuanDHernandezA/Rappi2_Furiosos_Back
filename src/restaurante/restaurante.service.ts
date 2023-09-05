import { Injectable } from '@nestjs/common';
import { RestauranteDTO } from './restaurante.dto';
import { RestauranteEntity } from './restaurante.entity';
import { RestauranteMapper } from './restaurante.mapper';
import { RestauranteRepository } from './restaurante.repository';

@Injectable()
export class RestauranteService {
  constructor(
    private restauranteRepository: RestauranteRepository,
    private mapper: RestauranteMapper,
  ) {}

  async getAll(): Promise<RestauranteDTO[]> {
    const restauranteEntity: RestauranteEntity[] =
      await this.restauranteRepository.getAll();
    return restauranteEntity.map((restaurante) =>
      this.mapper.entityToDto(restaurante),
    );
  }

  async getById(id: number): Promise<RestauranteDTO> {
    const restauranteEntity: RestauranteEntity =
      await this.restauranteRepository.getById(id);
    return this.mapper.entityToDto(restauranteEntity);
  }

  async new(restauranteDTO: RestauranteDTO): Promise<RestauranteDTO> {
    const newRestaurante: RestauranteEntity =
      await this.restauranteRepository.new(restauranteDTO);
    return this.mapper.entityToDto(newRestaurante);
  }

  async update(
    id: number,
    restauranteDTO: RestauranteDTO,
  ): Promise<RestauranteDTO> {
    const updateRestaurante = await this.restauranteRepository.update(
      restauranteDTO,
      id,
    );
    return this.mapper.entityToDto(updateRestaurante);
  }

  async delete(id: number): Promise<void> {
    await this.restauranteRepository.delete(id);
  }
}
