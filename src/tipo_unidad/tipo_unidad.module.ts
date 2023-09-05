import { Module } from '@nestjs/common';
import { TipoUnidadController } from './tipo_unidad.controller';
import { TipoUnidadMapper } from './tipo_unidad.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoUnidadEntity } from './tipo_unidad.entity';
import { TipoUnidadRepository } from './tipo_unidad.repository';
import { TipoUnidadService } from './tipo_unidad.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoUnidadEntity])],
  controllers: [TipoUnidadController],
  providers: [TipoUnidadService, TipoUnidadMapper, TipoUnidadRepository],
})
export class TipoUnidadModule {}
