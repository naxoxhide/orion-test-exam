import { MongoBookRepository } from 'src/infrastructure/repositories/mongo-book.repository';
export declare class BookController {
    private bookRepository;
    private createBookUseCase;
    constructor(bookRepository: MongoBookRepository);
    create(body: {
        id: number;
        title: string;
        chapters: number;
        pages: number;
    }): Promise<import("../../domain/entities/book.entity").Book>;
    findById(id: number): Promise<import("../../domain/entities/book.entity").Book>;
}
