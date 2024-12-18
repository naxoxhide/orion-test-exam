import { Schema, Document } from 'mongoose';
export declare const BookSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    id: number;
    title: string;
    chapters: number;
    pages: number;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    id: number;
    title: string;
    chapters: number;
    pages: number;
}>> & import("mongoose").FlatRecord<{
    id: number;
    title: string;
    chapters: number;
    pages: number;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface BookDocument extends Document {
    id: number;
    title: string;
    chapters: number;
    pages: number;
}
