import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class DatabaseFile {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  filename: string;

  @Column({
    type: 'bytea',
  })
  data: Uint8Array;
}

export default DatabaseFile;
