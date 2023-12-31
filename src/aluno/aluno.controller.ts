import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Aluno } from '@prisma/client';
import { CriarAlunoDTO } from './dto/CriarAlunoDTO.dto';
import { AlunoService } from './aluno.service';
import { AtualizarAlunoDTO } from './dto/AtualizarAlunoDTO.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Get()
  async getAllAlunos(): Promise<Aluno[]> {
    return this.alunoService.recuperarTodos();
  }

  @Post()
  @ApiBody({ type: CriarAlunoDTO })
  async postAluno(@Body() criarAlunoDTO: CriarAlunoDTO): Promise<Aluno> {
    return this.alunoService.criarAluno(criarAlunoDTO);
  }

  @Put(':id')
  @ApiBody({ type: AtualizarAlunoDTO })
  async putAluno(
    @Param('id', ParseIntPipe) id: number,
    @Body() atualizarAluno: AtualizarAlunoDTO,
  ): Promise<Aluno> {
    return this.alunoService.atualizarAluno(id, atualizarAluno);
  }

  @Get(':id')
  async getOneAluno(@Param('id', ParseIntPipe) id: number): Promise<Aluno> {
    return this.alunoService.recuperarUmAluno(id);
  }

  @Delete(':id')
  async deleteAluno(@Param('id', ParseIntPipe) id: number): Promise<Aluno> {
    return this.alunoService.deletar(id);
  }
}
