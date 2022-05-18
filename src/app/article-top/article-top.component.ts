import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-top',
  templateUrl: './article-top.component.html',
  styleUrls: ['./article-top.component.css']
})
export class ArticleTopComponent implements OnInit {

  articles!: Article[];
  
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getTop10Articles().subscribe(articles => {this.articles = articles});
  }

}
