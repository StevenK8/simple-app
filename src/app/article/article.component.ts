import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article!: Article;
    
  @Output()
  deleteArticle : EventEmitter<Article> = new EventEmitter();

  @Output()
  getAuthor : EventEmitter<Article> = new EventEmitter();

  ngOnInit(): void {
  }

  onDelete() {
    this.deleteArticle.emit(this.article);
  }

  onGetAuthor() {
    this.getAuthor.emit(this.article);
  } 

}
