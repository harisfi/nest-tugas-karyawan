import { IsString } from 'class-validator';

export class CreateKaryawanDto {
  @IsString()
  name: string;
}
