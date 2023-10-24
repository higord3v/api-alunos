import { IsPositive, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CriarAlunoDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nome: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  idade: number;

  @ApiProperty()
  @IsPositive()
  @IsNotEmpty()
  nota_primeiro_semestre: number;

  @ApiProperty()
  @IsPositive()
  @IsNotEmpty()
  nota_segundo_semestre: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  professor: string;

  @ApiProperty()
  @IsPositive()
  @IsNotEmpty()
  sala: number;
}
