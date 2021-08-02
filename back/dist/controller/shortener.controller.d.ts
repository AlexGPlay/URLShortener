import { ShortenerService } from './../services/shortener.service';
export declare class ShortenerController {
    private readonly shortenerService;
    constructor(shortenerService: ShortenerService);
    root(): string;
    obtainUrl(slug: string): Promise<Object>;
    shortenUrl(body: any): Promise<Object>;
}
