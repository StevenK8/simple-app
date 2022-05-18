import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  // article = [
  //   { title: 'My First Article', content: 'Hello World' },
  //   { title: 'My Second Article', content: 'Hello World' },
  //   { title: 'My Third Article', content: 'Hello World' },
  // ];

  articles!: Observable<Article[]>;
  
  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  ngOnClick(article: Article) {
    this.articleService.deleteArticle(article.id);
  }

  // articles(): Article[] {
  //   return this.articleService.getArticles();
  // }

}
