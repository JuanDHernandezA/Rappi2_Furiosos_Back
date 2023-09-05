import { ProductoEntity } from 'src/producto/producto.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('Categoria_Producto')
export class CategoriaProductoEntity {
  @PrimaryGeneratedColumn('increment')
  readonly pk_idCategoria: number;

  @Column()
  readonly n_nombre: string;

  @OneToMany(() => ProductoEntity, (producto) => producto.fk_idCategoria)
  producto: ProductoEntity[];

  constructor(pk_idCategoria: number, n_nombre: string) {
    this.pk_idCategoria = pk_idCategoria;
    this.n_nombre = n_nombre;
  }
}
