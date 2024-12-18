"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongo_module_1 = require("./infrastructure/database/mongo.module");
const book_controller_1 = require("./interface/controller/book.controller");
const mongo_book_repository_1 = require("./infrastructure/repositories/mongo-book.repository");
const mongoose_1 = require("@nestjs/mongoose");
const book_schema_1 = require("./infrastructure/schemas/book.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongo_module_1.MongoModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Book', schema: book_schema_1.BookSchema }]),
        ],
        controllers: [book_controller_1.BookController],
        providers: [mongo_book_repository_1.MongoBookRepository],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map