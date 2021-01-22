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
export class SearchBarComponent implements OnInit, AfterViewInit {
  @Input() bookList: Book;

  searchForm = new FormGroup({});

  constructor(private store: Store<BookReducer.State>) { }

  ngOnInit() {
    this.searchForm.setValue({title: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('\w')]),
                              price: new FormControl('')});
  }

  ngAfterViewInit() {
    console.log(this.bookList);
  }

  bookTitleMatchValidator(control: AbstractControl): { [key: string]: boolean } {
    if (control.value) {}
    return null;
  }

}
