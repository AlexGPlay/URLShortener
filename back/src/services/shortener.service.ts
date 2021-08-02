import { Injectable } from '@nestjs/common';
import uniqueSlug from 'unique-slug';

@Injectable()
export class ShortenerService {
  createUniqueUrl(url: string): string {
    const slug = uniqueSlug();

    return slug;
  }
}
