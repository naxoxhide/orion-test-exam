import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CreateBookUseCase } from 'src/application/use-cases/book/create-book.use-case';
import { MongoBookRepository } from 'src/infrastructure/repositories/mongo-book.repository';

@Controller('books')
export class BookController {
  private createBookUseCase: CreateBookUseCase;

  constructor(private bookRepository: MongoBookRepository) {
    this.createBookUseCase = new CreateBookUseCase(this.bookRepository);
  }

  @Post()
  async create(
    @Body()
    body: {
      id: number;
      title: string;
      chapters: number;
      pages: number;
    },
  ) {
    console.log(body);
    return this.createBookUseCase.execute({
      id: body.id,
      title: body.title,
      chapters: body.chapters,
      pages: body.pages,
    });
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    console.log(id);
    return this.bookRepository.findOne(id);
  }
}
