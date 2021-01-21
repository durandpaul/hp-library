import { Action } from '@ngrx/store';

import { Book } from '../model/book.model';

export const SET_BOOKS = '[Books] set Books';
export const FETCH_BOOKS = '[Books] fetch Books';
// export const FETCH_BOOKS_ERROR = '[Books] fetch Books Error';
export const GET_SELECTED_BOOK = '[Book] get selected Book';


export class SetBooks implements Action {
    readonly type = SET_BOOKS;

    constructor(public payload: Book[]) {}
}

export class FetchBooks implements Action {
    readonly type = FETCH_BOOKS;
}

// export class FetchBooksError implements Action {
//     readonly type = FETCH_BOOKS_ERROR;
// }

export class GetSelectedBook implements Action {
    readonly type = GET_SELECTED_BOOK;

    constructor(public payload: Book) {}
}

export type BooksActions = SetBooks | FetchBooks | GetSelectedBook;

