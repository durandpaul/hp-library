import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as BookReducer from '../../shared/store/books.reducer';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  id: string;
  booklist: any;
  selectedBook: object;
  subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<BookReducer.State>) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param) {
        this.id = param.id;
        this.subscription = this.store.select('books').subscribe((booklist) => {
          this.booklist = booklist;
          this.selectedBook = this.booklist.books.find(book => book.isbn ===  this.id);
        });
      }

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
