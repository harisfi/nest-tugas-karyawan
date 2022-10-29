import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';
import { UpdateKaryawanDto } from './dto/update-karyawan.dto';
import { Karyawan } from './entities/karyawan.entity';

@Injectable()
export class KaryawanService {
  constructor(
    @InjectRepository(Karyawan)
    private karyawanRepository: Repository<Karyawan>,
  ) {}

  create(createKaryawanDto: CreateKaryawanDto): Promise<Karyawan> {
    const karyawan = this.karyawanRepository.create(createKaryawanDto);
    return this.karyawanRepository.save(karyawan);
  }

  findAll(): Promise<Karyawan[]> {
    return this.karyawanRepository.find();
  }

  async update(
    id: number,
    updateKaryawanDto: UpdateKaryawanDto,
  ): Promise<boolean> {
    const karyawan = await this.karyawanRepository.update(
      id,
      updateKaryawanDto,
    );
    if (!karyawan.affected) {
      return false;
    }

    return true;
  }

  async remove(id: number): Promise<boolean> {
    const karyawan = await this.karyawanRepository.delete(id);
    if (!karyawan.affected) {
      return false;
    }

    return true;
  }
}
