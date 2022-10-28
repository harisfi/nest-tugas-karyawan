import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KaryawanModule } from './karyawan/karyawan.module';
import { TugasModule } from './tugas/tugas.module';

@Module({
  imports: [KaryawanModule, TugasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
