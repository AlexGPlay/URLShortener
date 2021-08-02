"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenerService = void 0;
const common_1 = require("@nestjs/common");
const unique_slug_1 = require("unique-slug");
let ShortenerService = class ShortenerService {
    createUniqueUrl(url) {
        const slug = unique_slug_1.default();
        return slug;
    }
};
ShortenerService = __decorate([
    common_1.Injectable()
], ShortenerService);
exports.ShortenerService = ShortenerService;
//# sourceMappingURL=shortener.service.js.map