import { Article } from './article';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(articles: Article[], keyword: string): Article[] {
    if(!keyword){
      return articles;
    }
    return articles.filter((article) => article.title.includes(keyword));
  }
}
