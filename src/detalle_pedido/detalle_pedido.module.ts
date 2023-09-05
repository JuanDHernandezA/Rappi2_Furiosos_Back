import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePedidoController } from './detalle_pedido.controller';
import { DetallePedidoEntity } from './detalle_pedido.entity';
import { DetallePedidoMapper } from './detalle_pedido.mapper';
import { DetallePedidoRepository } from './detalle_pedido.repository';
import { DetallePedidoService } from './detalle_pedido.service';

@Module({
  imports: [TypeOrmModule.forFeature([DetallePedidoEntity])],
  controllers: [DetallePedidoController],
  providers: [
    DetallePedidoService,
    DetallePedidoMapper,
    DetallePedidoRepository,
  ],
})
export class DetallePedidoModule {}
