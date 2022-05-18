import { Injectable } from '@angular/core';
import { Article } from './model/article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  // public getArticles(): Article[] {
  //   return [
  //     {
  //       title: 'My First Article',
  //       content: 'Hello World',
  //       author: 'Orangefire',
  //     },
  //     {
  //       title: 'Angular component',
  //       content: 'Angular component looks awesome!',
  //       author: 'Orangefire',
  //     },
  //     {
  //       title: 'Angular service',
  //       content: 'I read something about angular service, i will try it soon',
  //       author: 'Orangefire',
  //     },
  //   ];
  // }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  public getArticle(name: string): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${name}`);
  }

  public createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>('http://localhost:3000/articles', article);
  }

  public deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(`http://localhost:3000/articles/${id}`);
  }

}
