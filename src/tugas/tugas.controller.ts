import { Controller, Get, Post, Body, Param, Delete, Put, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { TugasService } from './tugas.service';
import { CreateTugasDto } from './dto/create-tugas.dto';
import { UpdateTugasDto } from './dto/update-tugas.dto';

@Controller('tugas')
export class TugasController {
  constructor(private readonly tugasService: TugasService) {}

  @Post('create')
  create(@Body() createTugasDto: CreateTugasDto) {
    return this.tugasService.create(createTugasDto);
  }

  @Get()
  findAll() {
    return this.tugasService.findAll();
  }

  @Put('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateTugasDto: UpdateTugasDto,
  ) {
    if (Object.keys(updateTugasDto).length === 0) {
      throw new BadRequestException();
    }

    const updated = await this.tugasService.update(+id, updateTugasDto);
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
    const deleted = await this.tugasService.remove(+id);
    if (deleted) {
      return {
        statusCode: 200,
        message: 'Data Successfully Deleted',
      };
    }

    throw new InternalServerErrorException();
  }
}
