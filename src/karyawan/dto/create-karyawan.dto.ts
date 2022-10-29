import { IsNotEmpty, IsString } from 'class-validator';

export class CreateKaryawanDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
