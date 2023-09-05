import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaProductoController } from './categoria_producto.controller';
import { CategoriaProductoEntity } from './categoria_producto.entity';
import { CategoriaProductoMapper } from './categoria_producto.mapper';
import { CategoriaProductoRepository } from './categoria_producto.repository';
import { CategoriaProductoService } from './categoria_producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaProductoEntity])],
  controllers: [CategoriaProductoController],
  providers: [
    CategoriaProductoService,
    CategoriaProductoMapper,
    CategoriaProductoRepository,
  ],
})
export class CategoriaProductoModule {}
