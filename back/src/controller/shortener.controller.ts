import { ShortenerService } from './../services/shortener.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('shortener')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Get()
  root(): string {
    return 'Shorten urls on this path';
  }

  @Get('/:slug')
  async obtainUrl(@Param('slug') slug: string): Promise<Object> {
    try {
      const url = await this.shortenerService.getUrlFromSlug(slug);
      return { data: url };
    } catch (e) {
      return { error: e };
    }
  }

  @Post()
  async shortenUrl(@Body() body): Promise<Object> {
    try {
      console.log(body);
      const slug = await this.shortenerService.createUniqueUrl(body.text);
      return { data: slug };
    } catch (e) {
      console.log(e);
      return { error: e };
    }
  }
}
