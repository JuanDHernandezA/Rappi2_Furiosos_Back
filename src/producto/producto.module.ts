import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseFile from './databaseFile.entity';
import DatabaseFilesController from './databaseFiles.controller';
import DatabaseFilesService from './databaseFiles.service';
import { ProductoController } from './producto.controller';
import { ProductoEntity } from './producto.entity';
import { ProductoMapper } from './producto.mapper';
import { ProductoRepository } from './producto.repository';
import { ProductoService } from './producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoEntity, DatabaseFile])],
  controllers: [ProductoController, DatabaseFilesController],
  providers: [
    DatabaseFilesService,
    ProductoService,
    ProductoMapper,
    ProductoRepository,
  ],
})
export class ProductoModule {}
