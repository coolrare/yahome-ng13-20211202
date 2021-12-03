import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  keyword = 'test';
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

  constructor() {}

  ngOnInit(): void {}

  search(event: MouseEvent) {
    this.keyword += '!';
    console.log(event.ctrlKey);
  }

  inputKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('search');
    }
  }

  inputKeyupEnter() {
    console.log('search (keyup.enter)');
  }

  keywordInput(event: Event) {
    this.keyword = (event.target! as HTMLInputElement).value;
  }

  test(input: any) {
    console.log(input);
  }
}
