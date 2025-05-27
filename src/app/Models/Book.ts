export class Book {
    id!: number;
    isbn!:string;
    title!: string;
    authors! : string[];
    description?: string;
    categories!: string[];
    image?: string;
    stars?: number;
    readingState?: string;
}