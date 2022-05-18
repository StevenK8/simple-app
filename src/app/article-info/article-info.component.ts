import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../model/article';
import { Author } from '../model/author';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.css']
})
export class ArticleInfoComponent implements OnInit {
  @Input()
  article!: Article;
  
  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.articleService.getSingleArticle(id).subscribe(a => {
      this.article = a;
    });
  }

  ngOnInit(): void {
  }


  delete(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe(_value => {
      this.router.navigate(['/articles']);
    });
  }

}
