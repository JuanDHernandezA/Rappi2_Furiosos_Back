import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PedidoDTO } from './pedido.dto';
import { PedidoService } from './pedido.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('pedido')
@ApiTags('pedido')
export class PedidoController {
  constructor(private pedidoService: PedidoService) {}

  @Get()
  async getAll(): Promise<PedidoDTO[]> {
    return await this.pedidoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<PedidoDTO> {
    return await this.pedidoService.getById(id);
  }

  @Post()
  async new(@Body() pedidoDTO: PedidoDTO): Promise<PedidoDTO> {
    return await this.pedidoService.new(pedidoDTO);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() pedidoDTO: PedidoDTO,
  ): Promise<PedidoDTO> {
    return await this.pedidoService.update(id, pedidoDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.pedidoService.delete(id);
  }
}
