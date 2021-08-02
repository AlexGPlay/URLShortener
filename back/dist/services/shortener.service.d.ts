import { PrismaService } from './prisma.service';
export declare class ShortenerService {
    private prisma;
    constructor(prisma: PrismaService);
    createUniqueUrl(url: string): Promise<string>;
    getUrlFromSlug(slug: string): Promise<string>;
    private generateSlug;
}
