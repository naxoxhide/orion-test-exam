export class Book {
  constructor(
    public readonly id: number,
    public title: string,
    public chapters: number,
    public pages: number,
  ) {}
}
