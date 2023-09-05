import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DetallePedidoDTO } from './detalle_pedido.dto';
import { DetallePedidoService } from './detalle_pedido.service';
import { ApiTags } from '@nestjs/swagger';
import { PedidoEntity } from 'src/pedido/pedido.entity';
import { ProductoEntity } from 'src/producto/producto.entity';
import { MenuEntity } from 'src/menu/menu.entity';

@Controller('detallePedido')
@ApiTags('detallePedido')
export class DetallePedidoController {
  constructor(private detallePedidoService: DetallePedidoService) {}

  @Get()
  async getAll(): Promise<DetallePedidoDTO[]> {
    return await this.detallePedidoService.getAll();
  }

  @Get(':idPedido/:idProducto/:idMenu')
  async getById(
    @Param('idPedido') idPedido: number,
    @Param('idProducto') idProducto: number,
    @Param('idMenu') idMenu: number,
  ): Promise<DetallePedidoDTO[]> {
    const pedido = new PedidoEntity(idPedido, null, null, null, null, null);
    const producto = new ProductoEntity(
      idProducto,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    );
    const menu = new MenuEntity(idMenu, null, null, null, null, null);
    return await this.detallePedidoService.getById(pedido, producto, menu);
  }

  @Post()
  async new(
    @Body() detallePedidoDTO: DetallePedidoDTO,
  ): Promise<DetallePedidoDTO> {
    return await this.detallePedidoService.new(detallePedidoDTO);
  }

  @Put(':idPedido/:idProducto/:idMenu')
  async update(
    @Param('idPedido') idPedido: number,
    @Param('idProducto') idProducto: number,
    @Param('idMenu') idMenu: number,
    @Body() detallePedidoDTO: DetallePedidoDTO,
  ): Promise<DetallePedidoDTO> {
    const pedido = new PedidoEntity(idPedido, null, null, null, null, null);
    const producto = new ProductoEntity(
      idProducto,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    );
    const menu = new MenuEntity(idMenu, null, null, null, null, null);
    return await this.detallePedidoService.update(
      pedido,
      producto,
      menu,
      detallePedidoDTO,
    );
  }

  @Delete(':idPedido/:idProducto/:idMenu')
  async delete(
    @Param('idPedido') idPedido: number,
    @Param('idProducto') idProducto: number,
    @Param('idMenu') idMenu: number,
  ): Promise<void> {
    const pedido = new PedidoEntity(idPedido, null, null, null, null, null);
    const producto = new ProductoEntity(
      idProducto,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    );
    const menu = new MenuEntity(idMenu, null, null, null, null, null);
    return await this.detallePedidoService.delete(pedido, producto, menu);
  }
}
