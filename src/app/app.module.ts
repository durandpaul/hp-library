import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';

import {BookListService} from './shared/service/book-list.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { BookDetailComponent } from './book-list/book-detail/book-detail.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './shared/store/books.effects';
import { BookReducer } from './shared/store/books.reducer';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'booklist', component: BookListComponent},
  {path: 'book/:id', component: BookDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookItemComponent,
    HomeComponent,
    HeaderComponent,
    NavBarComponent,
    BookDetailComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({books: BookReducer}),
    EffectsModule.forRoot([BookEffects])
  ],
  providers: [BookListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
