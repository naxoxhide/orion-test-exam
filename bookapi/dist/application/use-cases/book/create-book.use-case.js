"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookUseCase = void 0;
const book_entity_1 = require("../../../domain/entities/book.entity");
class CreateBookUseCase {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async execute(createBook) {
        const book = new book_entity_1.Book(createBook.id, createBook.title, createBook.chapters, createBook.pages);
        return this.bookRepository.create(book);
    }
}
exports.CreateBookUseCase = CreateBookUseCase;
//# sourceMappingURL=create-book.use-case.js.map