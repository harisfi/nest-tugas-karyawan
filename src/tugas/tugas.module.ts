import { Module } from '@nestjs/common';
import { TugasService } from './tugas.service';
import { TugasController } from './tugas.controller';

@Module({
  controllers: [TugasController],
  providers: [TugasService]
})
export class TugasModule {}
