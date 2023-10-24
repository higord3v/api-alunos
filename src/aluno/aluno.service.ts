import { Injectable, NotFoundException } from '@nestjs/common';
import { Aluno } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CriarAlunoDTO } from './dto/CriarAlunoDTO.dto';

@Injectable()
export class AlunoService {
  constructor(private readonly prismaService: PrismaService) {}

  async recuperarTodos(): Promise<Aluno[]> {
    return this.prismaService.aluno.findMany();
  }

  async criarAluno(criarAlunoDTO: CriarAlunoDTO): Promise<Aluno> {
    return this.prismaService.aluno.create({
      data: criarAlunoDTO,
    });
  }

  async atualizarAluno(
    id: number,
    criarAlunoDTO: CriarAlunoDTO,
  ): Promise<Aluno> {
    const aluno = await this.prismaService.aluno.findUnique({ where: { id } });

    if (!aluno) throw new NotFoundException();

    return this.prismaService.aluno.update({
      where: { id },
      data: criarAlunoDTO,
    });
  }

  async recuperarUmAluno(id: number): Promise<Aluno> {
    const aluno = await this.prismaService.aluno.findUnique({ where: { id } });

    if (!aluno) throw new NotFoundException();

    return aluno;
  }

  async deletar(id: number): Promise<Aluno> {
    const aluno = await this.prismaService.aluno.findUnique({ where: { id } });

    if (!aluno) throw new NotFoundException();

    return this.prismaService.aluno.delete({ where: { id } });
  }
}
