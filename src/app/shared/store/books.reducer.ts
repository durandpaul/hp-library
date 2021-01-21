import { Book } from '../model/book.model';
import * as BooksActions from './books.action';

export interface State {
    books: Book[];
}

const initialState: State = {
    books: []
};

export function BookReducer(state = initialState, action: BooksActions.BooksActions) {
    switch (action.type) {
        case BooksActions.SET_BOOKS:
            return {
                ...state,
                books : [...action.payload]
            };
        default:
            return state;
    }
}
