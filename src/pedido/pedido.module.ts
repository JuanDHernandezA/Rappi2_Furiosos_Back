import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoController } from './pedido.controller';
import { PedidoEntity } from './pedido.entity';
import { PedidoMapper } from './pedido.mapper';
import { PedidoRepository } from './pedido.repository';
import { PedidoService } from './pedido.service';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoEntity])],
  controllers: [PedidoController],
  providers: [PedidoService, PedidoMapper, PedidoRepository],
})
export class PedidoModule {}
