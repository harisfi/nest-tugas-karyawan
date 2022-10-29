import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Karyawan } from 'src/karyawan/entities/karyawan.entity';

export class CreateTugasDto {
  @IsNotEmpty()
  @IsNumber()
  assignee: Karyawan;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
