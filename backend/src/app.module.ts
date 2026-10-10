import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PomodoroModule } from './pomodoro/pomodoro.module';

@Module({
  imports: [PomodoroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
