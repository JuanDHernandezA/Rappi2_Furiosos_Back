import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RestauranteDTO } from './restaurante.dto';
import { RestauranteService } from './restaurante.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('restaurante')
@ApiTags('restaurante')
export class RestauranteController {
  constructor(private restauranteService: RestauranteService) {}

  @Get()
  async getAll(): Promise<RestauranteDTO[]> {
    return await this.restauranteService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<RestauranteDTO> {
    return await this.restauranteService.getById(id);
  }

  @Post()
  async new(@Body() restauranteDTO: RestauranteDTO): Promise<RestauranteDTO> {
    return await this.restauranteService.new(restauranteDTO);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() restauranteDTO: RestauranteDTO,
  ): Promise<RestauranteDTO> {
    return await this.restauranteService.update(id, restauranteDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.restauranteService.delete(id);
  }
}
