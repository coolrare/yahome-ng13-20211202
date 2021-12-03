import { ArticleService } from './article.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { AsideComponent } from './aside/aside.component';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FakeArticleService } from './fake-article-service';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    ArticleComponent,
    AsideComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide: ArticleService,
    //   useClass: FakeArticleService
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


