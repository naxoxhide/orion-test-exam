import { Book } from '../entities/book.entity';

export interface BookRepository {
  //findAll(): Promise<Book[]>;
  findOne(id: number): Promise<Book>;
  create(book: Book): Promise<Book>;
  //update(id: number, book: Book): Promise<Book>;
  //delete(id: number): Promise<void>;
}
