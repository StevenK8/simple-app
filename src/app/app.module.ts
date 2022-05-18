import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import {ArticleService} from "./article.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleInfoComponent } from './article-info/article-info.component';
import { ArticleTopComponent } from './article-top/article-top.component';

const appRoutes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: '', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleInfoComponent },
  { path: 'create', component: ArticleCreationComponent },
  { path: 'top10', component: ArticleTopComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    NavbarComponent,
    ArticleInfoComponent,
    ArticleTopComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

