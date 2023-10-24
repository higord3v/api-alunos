import { Body, Controller, Get, Post } from '@nestjs/common';
import { aluno } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async index(): Promise<aluno[]> {
    return this.prismaService.aluno.findMany();
  }

  @Post()
  async createStudent(
    @Body()
    postData: {
      nome: string;
      idade: number;
      nota_primeiro_semestre: number;
      nota_segundo_semestre: number;
      professor: string;
      sala: number;
    },
  ): Promise<aluno> {
    const {
      nome,
      idade,
      nota_primeiro_semestre,
      nota_segundo_semestre,
      professor,
      sala,
    } = postData;
    return this.prismaService.aluno.create({
      data: {
        nome,
        idade,
        nota_primeiro_semestre,
        nota_segundo_semestre,
        professor,
        sala,
      },
    });
  }
}
