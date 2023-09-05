import { IngredienteEntity } from 'src/ingrediente/ingrediente.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('Tipo_Unidad')
export class TipoUnidadEntity {
  @PrimaryGeneratedColumn('increment')
  readonly pk_idUnidad: number;

  @Column()
  readonly n_nombre_unidad: string;

  @Column()
  readonly n_sigla: string;

  @OneToMany(() => IngredienteEntity, (ingrediente) => ingrediente.fk_idUnidad)
  ingrediente: IngredienteEntity[];

  constructor(pk_idUnidad: number, n_nombre_unidad: string, n_sigla: string) {
    this.pk_idUnidad = pk_idUnidad;
    this.n_nombre_unidad = n_nombre_unidad;
    this.n_sigla = n_sigla;
  }
}
