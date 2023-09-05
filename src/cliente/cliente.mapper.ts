import { Injectable } from '@nestjs/common';
import { ClienteDTO } from './cliente.dto';
import { ClienteEntity } from './cliente.entity';

@Injectable()
export class ClienteMapper {
  dtoToEntity(clienteDTO: ClienteDTO): ClienteEntity {
    return new ClienteEntity(
      clienteDTO.pk_identificador,
      clienteDTO.n_nombre,
      clienteDTO.n_celular,
      clienteDTO.n_correo,
      clienteDTO.p_contrasenia,
    );
  }

  entityToDto(clienteEntity: ClienteEntity): ClienteDTO {
    return new ClienteDTO(
      clienteEntity.pk_identificador,
      clienteEntity.n_nombre,
      clienteEntity.n_celular,
      clienteEntity.n_correo,
      clienteEntity.p_contrasenia,
    );
  }
}
