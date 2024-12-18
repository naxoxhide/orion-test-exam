import { Book } from '../entities/book.entity';
export interface BookRepository {
    findOne(id: number): Promise<Book>;
    create(book: Book): Promise<Book>;
}
