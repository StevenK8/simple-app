import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ArticleInfoComponent } from './article-info/article-info.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
