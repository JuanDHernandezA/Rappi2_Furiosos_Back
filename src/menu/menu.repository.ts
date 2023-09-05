import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { MenuDTO } from './menu.dto';
import { MenuEntity } from './menu.entity';
import { MenuMapper } from './menu.mapper';

@Injectable()
export class MenuRepository {
  constructor(
    @InjectRepository(MenuEntity)
    private menuEntity: Repository<MenuEntity>,
    private mapper: MenuMapper,
  ) {}

  getAll(): Promise<MenuEntity[]> {
    return this.menuEntity.find({
      relations: { restaurantes: true, productos: true },
    });
  }

  getById(id: number): Promise<MenuEntity> {
    return this.menuEntity.findOne({
      where: { pk_idMenu: id },
      relations: { restaurantes: true, productos: true },
    });
  }

  new(menuDTO: MenuDTO): Promise<MenuEntity> {
    const newMenu = this.mapper.dtoToEntity(menuDTO);
    return this.menuEntity.save(newMenu);
  }

  async update(menuDTO: MenuDTO, id: number): Promise<MenuEntity> {
    menuDTO.pk_idMenu = id;
    const updateMenu = this.mapper.dtoToEntity(menuDTO);
    await this.menuEntity.update(id, updateMenu);
    return this.menuEntity.findOne({ where: { pk_idMenu: id } });
  }

  delete(id: number): Promise<DeleteResult> {
    return this.menuEntity.delete(id);
  }
}
