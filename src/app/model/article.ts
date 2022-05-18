import { Author, AuthorCreation } from "./author";

export interface Article {
    title: string;
    content: string;
    idauthor: number;
    id : number;
}

export interface ArticleCreation {
    title: string;
    content: string;
    idauthor: number;
}