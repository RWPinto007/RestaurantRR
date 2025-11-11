import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMenuDto {
  @IsNotEmpty()
  title: string;

  description?: string;

  @IsNumber()
  price: number;

  image?: string;
}
