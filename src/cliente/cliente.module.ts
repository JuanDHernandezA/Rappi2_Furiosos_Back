import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteController } from './cliente.controller';
import { ClienteEntity } from './cliente.entity';
import { ClienteMapper } from './cliente.mapper';
import { ClienteRepository } from './cliente.repository';
import { ClienteService } from './cliente.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity])],
  controllers: [ClienteController],
  providers: [ClienteService, ClienteMapper, ClienteRepository],
})
export class ClienteModule {}
