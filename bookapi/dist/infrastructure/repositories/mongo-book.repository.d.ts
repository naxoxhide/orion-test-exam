import { Model } from 'mongoose';
import { Book } from 'src/domain/entities/book.entity';
import { BookRepository } from 'src/domain/repositories/book-repository.interface';
import { BookDocument } from '../schemas/book.schema';
export declare class MongoBookRepository implements BookRepository {
    private bookModel;
    constructor(bookModel: Model<BookDocument>);
    create(book: Book): Promise<Book>;
    findOne(id: number): Promise<Book | null>;
}
