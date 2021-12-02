import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  search(event: MouseEvent) {
    console.log(event.ctrlKey);
  }

  inputKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('search');
    }
  }

  inputKeyupEnter(){
    console.log('search (keyup.enter)');
  }
}
