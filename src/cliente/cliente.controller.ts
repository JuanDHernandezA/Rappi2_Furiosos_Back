import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClienteDTO } from './cliente.dto';
import { ClienteService } from './cliente.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('cliente')
@ApiTags('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}
  clienteDTO: ClienteDTO[] = [];

  @Get()
  async getAll(): Promise<ClienteDTO[]> {
    return await this.clienteService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<ClienteDTO> {
    return await this.clienteService.getById(id);
  }

  @Post()
  async new(@Body() clienteDTO: ClienteDTO): Promise<ClienteDTO> {
    return await this.clienteService.new(clienteDTO);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() cliente: ClienteDTO,
  ): Promise<ClienteDTO> {
    return await this.clienteService.update(id, cliente);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.clienteService.delete(id);
  }
}
