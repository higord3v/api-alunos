import { IsPositive, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class AtualizarAlunoDTO {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  nome: string;

  @IsPositive()
  @IsOptional()
  idade: number;

  @IsPositive()
  @IsOptional()
  nota_primeiro_semestre: number;

  @IsOptional()
  @IsPositive()
  nota_segundo_semestre: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  professor: string;

  @IsOptional()
  @IsPositive()
  sala: number;
}
