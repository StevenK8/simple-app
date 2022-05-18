import { Component, OnInit } from '@angular/core';
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

  articles!: Article[];
  
  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(articles => {this.articles = articles});
  }

  ngOnDelete(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe(a => {
      this.articles = this.articles.filter(a => a.id !== article.id);
    });
  }

  // articles(): Article[] {
  //   return this.articleService.getArticles();
  // }

}
