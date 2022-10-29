import { Controller, Get, Post, Body, Param, Delete, Put, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { KaryawanService } from './karyawan.service';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';
import { UpdateKaryawanDto } from './dto/update-karyawan.dto';

@Controller('karyawan')
export class KaryawanController {
  constructor(private readonly karyawanService: KaryawanService) {}

  @Post('create')
  create(@Body() createKaryawanDto: CreateKaryawanDto) {
    return this.karyawanService.create(createKaryawanDto);
  }

  @Get()
  findAll() {
    return this.karyawanService.findAll();
  }

  @Put('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateKaryawanDto: UpdateKaryawanDto,
  ) {
    if (Object.keys(updateKaryawanDto).length === 0) {
      throw new BadRequestException();
    }

    const updated = await this.karyawanService.update(+id, updateKaryawanDto);
    if (updated) {
      return {
        statusCode: 200,
        message: 'Data Successfully Updated',
      };
    }

    throw new InternalServerErrorException();
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    const deleted = await this.karyawanService.remove(+id);
    if (deleted) {
      return {
        statusCode: 200,
        message: 'Data Successfully Deleted',
      };
    }

    throw new InternalServerErrorException();
  }
}
