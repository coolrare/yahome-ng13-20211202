import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ArticleService]
})
export class HeaderComponent implements OnInit {
  title = 'The Will Will Web';
  subTitle = '記載著 Will 在網路世界的學習心得與技術分享';
  link = 'https://google.com/';
  fbTitle = 'Will 保哥的技術交流中心';

  isHighlight = false;
  fontSize = 24;
  displayIcons = true;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  toggleHighlight() {
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
    this.displayIcons = !this.displayIcons;
  }

}
