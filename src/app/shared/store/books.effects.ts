import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { BookListService } from '../service/book-list.service';

import * as BooksActions from './books.action';

@Injectable()
export class BookEffects {
   @Effect()
    fetchBooks = this.actions$.pipe(
        ofType(BooksActions.FETCH_BOOKS),
        switchMap(() => this.bookListService.getBookList()),
        map(books => {
            return new BooksActions.SetBooks(books);
        }),
        catchError(() => EMPTY)
    );

    constructor(
        private actions$: Actions,
        private bookListService: BookListService) {}
}
