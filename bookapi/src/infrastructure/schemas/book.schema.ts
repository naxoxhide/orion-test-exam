import { Schema, Document } from 'mongoose';

export const BookSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  chapters: { type: Number, required: true },
  pages: { type: Number, required: true },
});

export interface BookDocument extends Document {
  id: number;
  title: string;
  chapters: number;
  pages: number;
}
// Compare this snippet from nestjs-bookapi/src/infrastructure/database/mongo.module.ts:
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { BookSchema } from '../schemas/book.schema';
// import { BookRepositoryMongo } from '../../domain/repositories/book-repository-mongo';
// import { BookRepository } from '../../domain/repositories/book-repository.interface';
//
// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
//   ],
//   providers: [
//     {
//       provide: BookRepository,
//       useClass: BookRepositoryMongo,
//     },
//   ],
// })
// export class MongoModule {}
