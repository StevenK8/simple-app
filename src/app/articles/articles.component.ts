import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {

  articles!: Article[];
  
  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(articles => {this.articles = articles});
  }

  delete(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe(a => {
      this.articles = this.articles.filter(a => a.id !== article.id);
    });
  }

  getAuthor(article: Article) {
    this.articleService.getArticleByName(article.title).subscribe(a => {
      console.log(a);
    });
    // console.log(article);
  }

  public searchArticle(e: Event) {
    const title = (<HTMLInputElement>e.target).value;

    this.articleService.getArticlesByName(title).subscribe(a => {
      this.articles = a;
    });
  }
  
}
