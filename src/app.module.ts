import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KaryawanModule } from './karyawan/karyawan.module';
import { TugasModule } from './tugas/tugas.module';
import appConfig from './configs/app.config';
import databaseConfig from './configs/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, databaseConfig],
      isGlobal: true,
    }),
    KaryawanModule,
    TugasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
