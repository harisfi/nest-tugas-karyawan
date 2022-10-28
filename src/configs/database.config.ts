import { registerAs } from '@nestjs/config';
import { Karyawan } from 'src/karyawan/entities/karyawan.entity';
import { Tugas } from 'src/tugas/entities/tugas.entity';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  type: process.env.DATABASE_TYPE,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  entities: [Karyawan, Tugas],
}));
