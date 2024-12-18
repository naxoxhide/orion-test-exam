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
exports.MongoBookRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const book_entity_1 = require("../../domain/entities/book.entity");
let MongoBookRepository = class MongoBookRepository {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async create(book) {
        const newBook = new this.bookModel(book);
        const result = await newBook.save();
        return result;
    }
    async findOne(id) {
        const result = await this.bookModel.findById(id);
        return result
            ? new book_entity_1.Book(result.id, result.title, result.chapters, result.pages)
            : null;
    }
};
exports.MongoBookRepository = MongoBookRepository;
exports.MongoBookRepository = MongoBookRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Book')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MongoBookRepository);
//# sourceMappingURL=mongo-book.repository.js.map