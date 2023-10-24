import {
  IsPositive,
  IsNotEmpty,
  IsString,
  Min,
  Max,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CriarAlunoDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nome: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  @Min(6)
  @Max(200)
  idade: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(10)
  nota_primeiro_semestre: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(10)
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
