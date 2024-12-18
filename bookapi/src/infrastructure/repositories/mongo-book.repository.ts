import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/domain/entities/book.entity';
import { BookRepository } from 'src/domain/repositories/book-repository.interface';
import { BookDocument } from '../schemas/book.schema';

@Injectable()
export class MongoBookRepository implements BookRepository {
  constructor(@InjectModel('Book') private bookModel: Model<BookDocument>) {}

  async create(book: Book): Promise<Book> {
    const newBook = new this.bookModel(book);
    const result = await newBook.save();
    return result;
  }

  async findOne(id: number): Promise<Book | null> {
    const result = await this.bookModel.findById(id);
    return result
      ? new Book(result.id, result.title, result.chapters, result.pages)
      : null;
  }
}
