import { IsPositive, IsNotEmpty, IsString } from 'class-validator';

export class CriarAlunoDTO {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsPositive()
  @IsNotEmpty()
  idade: number;

  @IsPositive()
  @IsNotEmpty()
  nota_primeiro_semestre: number;

  @IsPositive()
  @IsNotEmpty()
  nota_segundo_semestre: number;

  @IsNotEmpty()
  @IsString()
  professor: string;

  @IsPositive()
  @IsNotEmpty()
  sala: number;
}
