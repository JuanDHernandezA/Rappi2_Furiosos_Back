import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { TipoUnidadDTO } from './tipo_unidad.dto';
import { TipoUnidadEntity } from './tipo_unidad.entity';
import { TipoUnidadMapper } from './tipo_unidad.mapper';

@Injectable()
export class TipoUnidadRepository {
  constructor(
    @InjectRepository(TipoUnidadEntity)
    private tipoUnidadRepository: Repository<TipoUnidadEntity>,
    private mapper: TipoUnidadMapper,
  ) {}

  getAll(): Promise<TipoUnidadEntity[]> {
    return this.tipoUnidadRepository.find();
  }

  getById(id: number): Promise<TipoUnidadEntity> {
    return this.tipoUnidadRepository.findOne({ where: { pk_idUnidad: id } });
  }

  new(tipoUnidadDTO: TipoUnidadDTO): Promise<TipoUnidadEntity> {
    const newTipoUnidad = this.mapper.dtoToEntity(tipoUnidadDTO);
    return this.tipoUnidadRepository.save(newTipoUnidad);
  }

  async update(
    tipoUnidadDTO: TipoUnidadDTO,
    id: number,
  ): Promise<TipoUnidadEntity> {
    tipoUnidadDTO.pk_idUnidad = id;
    const updateUser = this.mapper.dtoToEntity(tipoUnidadDTO);
    await this.tipoUnidadRepository.update(id, updateUser);
    return this.tipoUnidadRepository.findOne({ where: { pk_idUnidad: id } });
  }

  delete(id: number): Promise<DeleteResult> {
    return this.tipoUnidadRepository.delete(id);
  }
}
