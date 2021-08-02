"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenerService = void 0;
const prisma_service_1 = require("./prisma.service");
const common_1 = require("@nestjs/common");
const crypto = require("crypto");
let ShortenerService = class ShortenerService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUniqueUrl(url) {
        if (!url || url.length === 0)
            throw new Error('Invalid url');
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
    async getUrlFromSlug(slug) {
        if (!slug || slug.length === 0)
            throw new Error('Invalid slug');
        const { url } = await this.prisma.url.findFirst({ where: { slug } });
        if (!url)
            throw new Error('Slug does not exist');
        return url;
    }
    generateSlug() {
        return new Promise((resolve, reject) => crypto.generateKey('hmac', { length: 64 }, (err, key) => {
            if (err)
                reject(err);
            resolve(key.export().toString('base64url'));
        }));
    }
};
ShortenerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShortenerService);
exports.ShortenerService = ShortenerService;
//# sourceMappingURL=shortener.service.js.map