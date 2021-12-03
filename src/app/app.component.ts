import { ArticleService } from './article.service';
import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.siteName;
  articles: Article[] = [];

  originalArticles = this.articles;
  keyword: string = '';

  // private articleService: ArticleService;

  // constructor(articleService: ArticleService) {
  //   this.articleService = articleService;
  // }

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articles = this.articleService.articles;
  }



  search(keyword: string) {
    this.keyword = keyword;
    // this.articles = this.originalArticles.filter(article => article.title.includes(keyword));

  }
}
