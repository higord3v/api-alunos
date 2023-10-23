import { Body, Controller, Get, Post } from '@nestjs/common';
import { Student } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Controller('aluno')
export class StudentController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async index(): Promise<Student[]> {
    return this.prismaService.student.findMany();
  }

  @Post()
  async createStudent(
    @Body()
    postData: {
      nome: string;
      idade: number;
      notaPrimeiroSemestre: number;
      notaSegundoSemestre: number;
      professor: string;
      sala: number;
    },
  ): Promise<Student> {
    const {
      nome: name,
      idade: age,
      notaPrimeiroSemestre: rating_first_semester,
      notaSegundoSemestre: rating_second_semester,
      professor: teacher,
      sala: room,
    } = postData;
    return this.prismaService.student.create({
      data: {
        name,
        age,
        rating_first_semester,
        rating_second_semester,
        teacher,
        room,
      },
    });
  }
}
