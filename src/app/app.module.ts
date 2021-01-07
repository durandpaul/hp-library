import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import {BookListService} from './shared/service/book-list.service';
import { BookItemComponent } from './book-list/book-item/book-item.component';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [BookListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
