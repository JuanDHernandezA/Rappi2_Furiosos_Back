import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IngredienteDTO } from './ingrediente.dto';
import { IngredienteService } from './ingrediente.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('ingrediente')
@ApiTags('ingrediente')
export class IngredienteController {
  constructor(private tipoUnidadService: IngredienteService) {}
  tipoUnidad: IngredienteDTO[] = [];

  @Get()
  async getAll(): Promise<IngredienteDTO[]> {
    return await this.tipoUnidadService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<IngredienteDTO> {
    return await this.tipoUnidadService.getById(id);
  }

  @Post()
  async new(@Body() tipoUnidad: IngredienteDTO): Promise<IngredienteDTO> {
    return await this.tipoUnidadService.new(tipoUnidad);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() tipoUnidad: IngredienteDTO,
  ): Promise<IngredienteDTO> {
    return await this.tipoUnidadService.update(id, tipoUnidad);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.tipoUnidadService.delete(id);
  }
}
