import {IsNotEmpty,  IsString} from "class-validator" 

export class CreateThemeDto{
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  audio!: string;
  
  @IsNotEmpty()
  @IsString()
  image!: string;
}