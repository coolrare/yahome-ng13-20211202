import { Article } from './article';
import { Pipe, PipeTransform } from '@angular/core';
import { ArticleService } from './article.service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  constructor(private articleService: ArticleService) { }

  transform(articles: Article[], keyword: string): Article[] {
    return this.articleService.searchArticles(articles, keyword);
  }
}
