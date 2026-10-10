import { Injectable } from '@nestjs/common';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto} from './dto/update-theme.dto'
@Injectable()
export class PomodoroService {
  private themes = [
    { id: 1, title: "Harry Potter", audio: "audio1.mp3", image: "image1.jpg" },
    { id: 2, title: "LOTR", audio: "audio2.mp3", image: "image2.jpg" },
  ];

  findAll() {
    return this.themes;
  }

  findById(id: number) {
    const theme = this.themes.find((timer) => timer.id === id);
    return theme;
  }

  create(dto: CreateThemeDto) {
    const newTheme= { id: this.themes.length + 1,title: dto.title, audio: dto.audio, image: dto.image };

    this.themes.push(newTheme);

    return this.themes;
  }

  update(id: number, dto: UpdateThemeDto) { 
    const theme = this.themes.find((theme) => theme.id === id)

    const updatedTheme = {
      ...theme,
      ...dto
    }

    return updatedTheme 
  }

  delete(id: number){

    const delThemeId = this.themes.find((theme) => theme.id === id)
    this.themes.map((theme) =>)    
  }
}
