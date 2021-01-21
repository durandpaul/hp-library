import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Book } from '../shared/model/book.model';

import * as BookReducer from '../shared/store/books.reducer';
import * as BooksActions from '../shared/store/books.action';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  subscription: Subscription;

  constructor(private store: Store<BookReducer.State>) {
    this.store.dispatch(new BooksActions.FetchBooks());
  }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.subscription = this.store.select('books').subscribe((books) => {
      this.books = books;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
