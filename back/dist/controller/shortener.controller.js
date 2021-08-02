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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenerController = void 0;
const shortener_service_1 = require("./../services/shortener.service");
const common_1 = require("@nestjs/common");
let ShortenerController = class ShortenerController {
    constructor(shortenerService) {
        this.shortenerService = shortenerService;
    }
    root() {
        return 'Shorten urls on this path';
    }
    async obtainUrl(slug) {
        try {
            const url = await this.shortenerService.getUrlFromSlug(slug);
            return { data: url };
        }
        catch (e) {
            return { error: e };
        }
    }
    async shortenUrl(body) {
        try {
            const slug = await this.shortenerService.createUniqueUrl(body.text);
            return { data: slug };
        }
        catch (e) {
            console.log(e);
            return { error: e };
        }
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ShortenerController.prototype, "root", null);
__decorate([
    common_1.Get('/:slug'),
    __param(0, common_1.Param('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShortenerController.prototype, "obtainUrl", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShortenerController.prototype, "shortenUrl", null);
ShortenerController = __decorate([
    common_1.Controller('shortener'),
    __metadata("design:paramtypes", [shortener_service_1.ShortenerService])
], ShortenerController);
exports.ShortenerController = ShortenerController;
//# sourceMappingURL=shortener.controller.js.map