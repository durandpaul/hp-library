import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';

import {BookListService} from './shared/service/book-list.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'booklist', component: BookListComponent},
  // {path: 'mybasket', component: basketComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookItemComponent,
    HomeComponent,
    HeaderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [BookListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
