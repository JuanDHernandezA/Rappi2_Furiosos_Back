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
import { ProductoDTO } from './producto.dto';
import { ProductoService } from './producto.service';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('producto')
@ApiTags('producto')
export class ProductoController {
  constructor(private productoService: ProductoService) {}
  producto: ProductoDTO[] = [];

  @Get()
  async getAll(): Promise<ProductoDTO[]> {
    return await this.productoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<ProductoDTO> {
    return await this.productoService.getById(id);
  }

  @Post()
  async new(@Body() producto: ProductoDTO): Promise<ProductoDTO> {
    return await this.productoService.new(producto);
  }

  @Post('foto/:id')
  @UseInterceptors(FileInterceptor('file'))
  async newFoto(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<ProductoDTO> {
    return await this.productoService.addFoto(
      id,
      file.buffer,
      file.originalname,
    );
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() producto: ProductoDTO,
  ): Promise<ProductoDTO> {
    return await this.productoService.update(id, producto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.productoService.delete(id);
  }
}
