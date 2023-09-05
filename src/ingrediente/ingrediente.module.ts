import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredienteController } from './ingrediente.controller';
import { IngredienteEntity } from './ingrediente.entity';
import { IngredienteMapper } from './ingrediente.mapper';
import { IngredienteRepository } from './ingrediente.repository';
import { IngredienteService } from './ingrediente.service';

@Module({
  imports: [TypeOrmModule.forFeature([IngredienteEntity])],
  controllers: [IngredienteController],
  providers: [IngredienteService, IngredienteMapper, IngredienteRepository],
})
export class IngredienteModule {}
