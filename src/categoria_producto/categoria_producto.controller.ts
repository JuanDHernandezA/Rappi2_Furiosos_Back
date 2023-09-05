import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriaProductoDTO } from './categoria_producto.dto';
import { CategoriaProductoService } from './categoria_producto.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('categoriaProducto')
@ApiTags('categoriaProducto')
export class CategoriaProductoController {
  constructor(private categoriaProductoService: CategoriaProductoService) {}
  categoriaProducto: CategoriaProductoDTO[] = [];

  @Get()
  async getAll(): Promise<CategoriaProductoDTO[]> {
    return await this.categoriaProductoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<CategoriaProductoDTO> {
    return await this.categoriaProductoService.getById(id);
  }

  @Post()
  async new(
    @Body() categoriaProducto: CategoriaProductoDTO,
  ): Promise<CategoriaProductoDTO> {
    return await this.categoriaProductoService.new(categoriaProducto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() categoriaProducto: CategoriaProductoDTO,
  ): Promise<CategoriaProductoDTO> {
    return await this.categoriaProductoService.update(id, categoriaProducto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.categoriaProductoService.delete(id);
  }
}
