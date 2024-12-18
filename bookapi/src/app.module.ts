import { Module } from '@nestjs/common';
import { MongoModule } from './infrastructure/database/mongo.module';
import { BookController } from './interface/controller/book.controller';
import { MongoBookRepository } from './infrastructure/repositories/mongo-book.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './infrastructure/schemas/book.schema';

@Module({
  imports: [
    MongoModule,
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
  ],
  controllers: [BookController],
  providers: [MongoBookRepository],
})
export class AppModule {}
