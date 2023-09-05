import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseFile from 'src/producto/databaseFile.entity';
import DatabaseFilesController from 'src/producto/databaseFiles.controller';
import DatabaseFilesService from 'src/producto/databaseFiles.service';
import { MenuController } from './menu.controller';
import { MenuEntity } from './menu.entity';
import { MenuMapper } from './menu.mapper';
import { MenuRepository } from './menu.repository';
import { MenuService } from './menu.service';

@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity, DatabaseFile])],
  controllers: [MenuController, DatabaseFilesController],
  providers: [MenuService, MenuMapper, MenuRepository, DatabaseFilesService],
})
export class MenuModule {}
