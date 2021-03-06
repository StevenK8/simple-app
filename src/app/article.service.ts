import { Injectable } from '@angular/core';
import { Article, ArticleCreation } from './model/article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author, AuthorCreation } from './model/author';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  public getTop10Articles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles?_limit=10');
  }

  public getArticlesByName(name: string): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:3000/articles?q=${name}`);
  }

  public getArticleByName(name: string): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:3000/articles?q=${name}`);
  }

  public getSingleArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }
    
  public createArticle(article: ArticleCreation): Observable<Article> {
    return this.http.post<Article>('http://localhost:3000/articles', article);
  }

  public createAuthor(author: AuthorCreation): Observable<Author> {
    return this.http.post<Author>('http://localhost:3000/authors', author);
  }

  // public getAuthorId(author: AuthorCreation): number {
  //   this.http.get<Author>(`http://localhost:3000/authors?q=${author.name}`).subscribe(a => {
  //     return a.id;
  //   });
  // }

  public getAuthorFromArticle(article: Article): Observable<Author> {
    return this.http.get<Author>(`http://localhost:3000/authors/${article.idauthor}`);
  }

  public deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(`http://localhost:3000/articles/${id}`);
  }
}
