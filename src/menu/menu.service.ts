import { Injectable } from '@nestjs/common';
import DatabaseFilesService from '../producto/databaseFiles.service';
import { MenuDTO } from './menu.dto';
import { MenuEntity } from './menu.entity';
import { MenuMapper } from './menu.mapper';
import { MenuRepository } from './menu.repository';

@Injectable()
export class MenuService {
  constructor(
    private menuRepository: MenuRepository,
    private mapper: MenuMapper,
    private readonly databaseFilesService: DatabaseFilesService,
  ) {}

  async getAll(): Promise<MenuDTO[]> {
    const menuEntity: MenuEntity[] = await this.menuRepository.getAll();
    return menuEntity.map((menu) => this.mapper.entityToDto(menu));
  }

  async getById(id: number): Promise<MenuDTO> {
    const menuEntity: MenuEntity = await this.menuRepository.getById(id);
    return this.mapper.entityToDto(menuEntity);
  }

  async new(menuDTO: MenuDTO): Promise<MenuDTO> {
    const newMenu: MenuEntity = await this.menuRepository.new(menuDTO);
    return this.mapper.entityToDto(newMenu);
  }

  async update(menuDTO: MenuDTO, id: number): Promise<MenuDTO> {
    const updateMenu = await this.menuRepository.update(menuDTO, id);
    return this.mapper.entityToDto(updateMenu);
  }

  async delete(id: number): Promise<void> {
    await this.menuRepository.delete(id);
  }

  async addFoto(id: number, imageBuffer: Buffer, filename: string) {
    const foto = await this.databaseFilesService.uploadDatabaseFile(
      imageBuffer,
      filename,
    );
    const menu = await this.menuRepository.getById(id);
    menu.i_fotoId = foto;
    return await this.menuRepository.update(menu, id);
  }
}
