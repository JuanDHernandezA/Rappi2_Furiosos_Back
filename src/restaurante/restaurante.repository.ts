import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { RestauranteDTO } from './restaurante.dto';
import { RestauranteEntity } from './restaurante.entity';
import { RestauranteMapper } from './restaurante.mapper';

@Injectable()
export class RestauranteRepository {
  constructor(
    @InjectRepository(RestauranteEntity)
    private restauranteEntity: Repository<RestauranteEntity>,
    private mapper: RestauranteMapper,
  ) {}

  getAll(): Promise<RestauranteEntity[]> {
    return this.restauranteEntity.find({
      relations: { menus: true, productos: true, pedidos: true },
    });
  }

  getById(id: number): Promise<RestauranteEntity> {
    return this.restauranteEntity.findOne({
      where: { pk_nit: id },
      relations: { menus: true, productos: true, pedidos: true },
    });
  }

  new(restauranteDTO: RestauranteDTO): Promise<RestauranteEntity> {
    const newRestaurante = this.mapper.dtoToEntity(restauranteDTO);
    return this.restauranteEntity.save(newRestaurante);
  }

  async update(
    restauranteDTO: RestauranteDTO,
    id: number,
  ): Promise<RestauranteEntity> {
    restauranteDTO.pk_nit = id;
    const updateRestaurante = this.mapper.dtoToEntity(restauranteDTO);
    await this.restauranteEntity.update(id, updateRestaurante);
    return this.restauranteEntity.findOne({ where: { pk_nit: id } });
  }

  delete(id: number): Promise<DeleteResult> {
    return this.restauranteEntity.delete(id);
  }
}
