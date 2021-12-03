import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  keyword = 'test';

  @Output() keywordSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  search(event: MouseEvent) {
    this.keywordSearch.emit(this.keyword);
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
