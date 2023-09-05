import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestauranteController } from './restaurante.controller';
import { RestauranteEntity } from './restaurante.entity';
import { RestauranteMapper } from './restaurante.mapper';
import { RestauranteRepository } from './restaurante.repository';
import { RestauranteService } from './restaurante.service';

@Module({
  imports: [TypeOrmModule.forFeature([RestauranteEntity])],
  controllers: [RestauranteController],
  providers: [RestauranteService, RestauranteMapper, RestauranteRepository],
})
export class RestauranteModule {}
