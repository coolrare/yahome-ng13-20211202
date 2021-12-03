import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  @Input() item?: Article;

  constructor() { }
  ngOnDestroy(): void {
    console.log('Article ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('Article ngOnInit');
  }

}
