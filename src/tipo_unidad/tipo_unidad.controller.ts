import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TipoUnidadDTO } from './tipo_unidad.dto';
import { TipoUnidadService } from './tipo_unidad.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('tipoUnidad')
@ApiTags('tipoUnidad')
export class TipoUnidadController {
  constructor(private tipoUnidadService: TipoUnidadService) {}
  tipoUnidad: TipoUnidadDTO[] = [];

  @Get()
  async getAll(): Promise<TipoUnidadDTO[]> {
    return await this.tipoUnidadService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<TipoUnidadDTO> {
    return await this.tipoUnidadService.getById(id);
  }

  @Post()
  async new(@Body() tipoUnidad: TipoUnidadDTO): Promise<TipoUnidadDTO> {
    return await this.tipoUnidadService.new(tipoUnidad);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() tipoUnidad: TipoUnidadDTO,
  ): Promise<TipoUnidadDTO> {
    return await this.tipoUnidadService.update(id, tipoUnidad);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.tipoUnidadService.delete(id);
  }
}
