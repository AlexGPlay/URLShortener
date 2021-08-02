import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { ShortenerController } from './controller/shortener.controller';
import { ShortenerService } from './services/shortener.service';

@Module({
  imports: [],
  controllers: [AppController, ShortenerController],
  providers: [ShortenerService],
})
export class AppModule {}
