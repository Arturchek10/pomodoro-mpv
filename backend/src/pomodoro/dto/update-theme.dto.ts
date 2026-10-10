import { IsOptional,  IsString} from "class-validator" 

export class UpdateThemeDto{
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  audio?: string;
  
  @IsOptional()
  @IsString()
  image?: string;
}