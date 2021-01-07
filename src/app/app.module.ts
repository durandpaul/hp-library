import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import {BookListService} from './shared/service/book-list.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [BookListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
