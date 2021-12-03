import { ArticleService } from './article.service';
import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { Article } from './article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

  constructor(private articleService: ArticleService) {}
  ngOnInit() {
    this.articleService.authorized = 'app';
    // this.articles = this.articleService.articles;

    this.articleService.getArticles().subscribe((data) => {
      this.articles = data.articles
      console.log(data);
    });
  }

  search(keyword: string) {
    this.keyword = keyword;
    // this.articles = this.originalArticles.filter(article => article.title.includes(keyword));
  }
}
