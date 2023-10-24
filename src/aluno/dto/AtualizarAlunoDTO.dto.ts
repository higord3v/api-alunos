import {
  IsPositive,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AtualizarAlunoDTO {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  nome: string;

  @IsPositive()
  @Min(6)
  @Max(200)
  @IsOptional()
  @ApiProperty({ required: false })
  idade: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  @Min(0)
  @Max(10)
  nota_primeiro_semestre: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
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
