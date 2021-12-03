import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {

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

  constructor() {}

  ngOnInit(): void {}

  searchArticle(keyword: string){
    console.log(keyword);
    this.keywordSearch.emit(keyword);
  }
}
