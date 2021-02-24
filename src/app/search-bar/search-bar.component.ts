import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Book } from '../shared/model/book.model';

import * as BookReducer from '../shared/store/books.reducer';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() bookList: Book;

  searchForm = new FormGroup({
    title: new FormControl('', [Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]),
    price: new FormControl('', [Validators.minLength(2), Validators.pattern('[0-9]*')]),
  }, );

  constructor(private store: Store<BookReducer.State>) { }

  onSubmit() {
    console.warn(this.searchForm.value);
  }

  isDisabled() {
    if ( (this.title.value.length >= 4 || this.price.value.length >= 2)  && this.searchForm.valid) {
      return false;
    } else {
      return true;
    }
  }

  get title() {
    return this.searchForm.get('title');
  }

  get price() {
    return this.searchForm.get('price');
  }

  titleError() {
    return this.title.getError('minLength');
  }

  // updateTitle() {
  //   this.title.setValue('Paul');
  // }

  // ngAfterViewInit() {
  //   console.log(this.bookList);
  // }


  bookTitleMatchValidator(control: AbstractControl): { [key: string]: boolean } {
    if (control.value) {}
    return null;
  }

}
