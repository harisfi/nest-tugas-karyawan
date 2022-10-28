import { Karyawan } from 'src/karyawan/entities/karyawan.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tugas {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Karyawan)
  @JoinColumn()
  asignee: Karyawan;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;
}
