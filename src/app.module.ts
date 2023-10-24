import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AlunoService } from './aluno/aluno.service';
import { AlunoController } from './aluno/aluno.controller';

@Module({
  imports: [],
  controllers: [AppController, AlunoController],
  providers: [AppService, PrismaService, AlunoService],
})
export class AppModule {}
