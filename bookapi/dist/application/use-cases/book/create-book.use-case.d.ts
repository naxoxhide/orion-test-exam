import { Book } from 'src/domain/entities/book.entity';
import { BookRepository } from 'src/domain/repositories/book-repository.interface';
export declare class CreateBookUseCase {
    private readonly bookRepository;
    constructor(bookRepository: BookRepository);
    execute(createBook: {
        id: number;
        title: string;
        chapters: number;
        pages: number;
    }): Promise<Book>;
}
