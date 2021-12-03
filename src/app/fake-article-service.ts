import { Article } from './article';

export class FakeArticleService {

  articles: Article[] = [];

  constructor() {
    console.log('FakeArticleService');
  }

  searchArticles(articles: Article[], keyword: string): Article[] {
    return [];
  }
}
