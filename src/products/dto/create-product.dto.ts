import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

/* 
  Camada responsável por formatar os dados recebidos no Controller e Services
  Nessa podemos setar os tipos de dados que queremos receber
  */
export class CreateProductDto {
  //Esses decorators vem da lib class-validator and class-transformer
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
