import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { MenuDTO } from './menu.dto';
import { MenuService } from './menu.service';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('menu')
@ApiTags('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Get()
  async getAll(): Promise<MenuDTO[]> {
    return await this.menuService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<MenuDTO> {
    return await this.menuService.getById(id);
  }

  @Post()
  async new(@Body() menuDTO: MenuDTO): Promise<MenuDTO> {
    return await this.menuService.new(menuDTO);
  }

  @Post('foto/:id')
  @UseInterceptors(FileInterceptor('file'))
  async newFoto(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<MenuDTO> {
    return await this.menuService.addFoto(id, file.buffer, file.originalname);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() menuDTO: MenuDTO,
  ): Promise<MenuDTO> {
    return await this.menuService.update(menuDTO, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.menuService.delete(id);
  }
}
