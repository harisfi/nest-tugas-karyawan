import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTugasDto } from './dto/create-tugas.dto';
import { UpdateTugasDto } from './dto/update-tugas.dto';
import { Tugas } from './entities/tugas.entity';

@Injectable()
export class TugasService {
  constructor(
    @InjectRepository(Tugas) private tugasRepository: Repository<Tugas>,
  ) {}

  create(createTugasDto: CreateTugasDto): Promise<Tugas> {
    const tugas = this.tugasRepository.create(createTugasDto);
    return this.tugasRepository.save(tugas);
  }

  findAll(): Promise<Tugas[]> {
    return this.tugasRepository.find({
      relations: ['assignee'],
    });
  }

  async update(id: number, updateTugasDto: UpdateTugasDto): Promise<boolean> {
    const tugas = await this.tugasRepository.update(id, updateTugasDto);
    if (!tugas.affected) {
      return false;
    }

    return true;
  }

  async remove(id: number): Promise<boolean> {
    const tugas = await this.tugasRepository.delete(id);
    if (!tugas.affected) {
      return false;
    }

    return true;
  }
}
