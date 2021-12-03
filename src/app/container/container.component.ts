import { ArticleService } from './../article.service';
import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [ArticleService]
})
export class ContainerComponent implements OnInit, OnChanges, DoCheck {

  num = 9;

  // 示範 getter / setter
  // _key = '';

  // get key() {
  //   return this._key;
  // }

  // set key(value: string){
  //   this._key = value;
  // }

  @Input() articles: Article[] = [];
  @Output() keywordSearch = new EventEmitter<string>();

  constructor(private articleService: ArticleService) {}

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  searchArticle(keyword: string){
    console.log(keyword);
    this.keywordSearch.emit(keyword);
  }
}
