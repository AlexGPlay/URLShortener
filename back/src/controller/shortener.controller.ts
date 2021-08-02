import { ShortenerService } from './../services/shortener.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('shortener')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Get()
  root(): string {
    return 'Shorten urls on this path';
  }

  @Post()
  shortenUrl(): Object {
    return 'Welcome to URL Shortener';
  }
}
