import { Book } from 'src/domain/entities/book.entity';
import { BookRepository } from 'src/domain/repositories/book-repository.interface';

export class CreateBookUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(createBook: {
    id: number;
    title: string;
    chapters: number;
    pages: number;
  }): Promise<Book> {
    const book = new Book(
      createBook.id,
      createBook.title,
      createBook.chapters,
      createBook.pages,
    );

    return this.bookRepository.create(book);
  }
}
