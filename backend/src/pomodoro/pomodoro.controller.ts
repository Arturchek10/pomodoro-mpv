import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
} from '@nestjs/common';
import { PomodoroService } from './pomodoro.service';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';

@Controller('')
export class PomodoroController {
  constructor(private readonly pomodoroService: PomodoroService) {}

  @Get('themes')
  findAll() {
    return this.pomodoroService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.pomodoroService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateThemeDto) {
    return this.pomodoroService.create(dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateThemeDto) {
    return this.pomodoroService.update(id, dto);
  } 
}
