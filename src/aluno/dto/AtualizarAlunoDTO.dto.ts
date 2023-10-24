import { IsPositive, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AtualizarAlunoDTO {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  nome: string;

  @IsPositive()
  @IsOptional()
  @ApiProperty({ required: false })
  idade: number;

  @IsPositive()
  @IsOptional()
  @ApiProperty({ required: false })
  nota_primeiro_semestre: number;

  @IsOptional()
  @IsPositive()
  @ApiProperty({ required: false })
  nota_segundo_semestre: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: false })
  professor: string;

  @IsOptional()
  @IsPositive()
  @ApiProperty({ required: false })
  sala: number;
}
