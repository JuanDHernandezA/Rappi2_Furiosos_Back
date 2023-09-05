import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { IngredienteDTO } from './ingrediente.dto';
import { IngredienteEntity } from './ingrediente.entity';
import { IngredienteMapper } from './ingrediente.mapper';

@Injectable()
export class IngredienteRepository {
  constructor(
    @InjectRepository(IngredienteEntity)
    private ingredienteEntity: Repository<IngredienteEntity>,
    private mapper: IngredienteMapper,
  ) {}

  getAll(): Promise<IngredienteEntity[]> {
    return this.ingredienteEntity.find({
      relations: {
        fk_idUnidad: true,
      },
    });
  }

  getById(id: number): Promise<IngredienteEntity> {
    return this.ingredienteEntity.findOne({
      where: { pk_idIngrediente: id },
      relations: {
        fk_idUnidad: true,
      },
    });
  }

  new(tipoUnidadDTO: IngredienteDTO): Promise<IngredienteEntity> {
    const newTipoUnidad = this.mapper.dtoToEntity(tipoUnidadDTO);
    return this.ingredienteEntity.save(newTipoUnidad);
  }

  async update(
    tipoUnidadDTO: IngredienteDTO,
    id: number,
  ): Promise<IngredienteEntity> {
    tipoUnidadDTO.pk_idIngrediente = id;
    const updateUser = this.mapper.dtoToEntity(tipoUnidadDTO);
    await this.ingredienteEntity.update(id, updateUser);
    return this.ingredienteEntity.findOne({ where: { pk_idIngrediente: id } });
  }

  delete(id: number): Promise<DeleteResult> {
    return this.ingredienteEntity.delete(id);
  }
}
