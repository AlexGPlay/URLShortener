import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class ShortenerService {
  constructor(private prisma: PrismaService) {}

  async createUniqueUrl(url: string): Promise<string> {
    if (!url || url.length === 0) throw new Error('Invalid url');

    const slug = await this.generateSlug();

    await this.prisma.url.create({
      data: {
        url,
        slug,
        accessCount: 0,
      },
    });

    return slug;
  }

  async getUrlFromSlug(slug: string): Promise<string> {
    if (!slug || slug.length === 0) throw new Error('Invalid slug');

    const { url } = await this.prisma.url.findFirst({ where: { slug } });
    if (!url) throw new Error('Slug does not exist');

    return url;
  }

  private generateSlug(): Promise<string> {
    return new Promise((resolve, reject) =>
      crypto.generateKey('hmac', { length: 64 }, (err, key) => {
        if (err) reject(err);
        resolve(key.export().toString('base64url'));
      }),
    );
  }
}
