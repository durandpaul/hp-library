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
export class SearchBarComponent implements OnInit {
  @Input() bookList: Book;

  searchForm: FormGroup;

  ngOnInit() {
    this.searchForm = new FormGroup({
      title: new FormControl('', [Validators.minLength(4), Validators.pattern('[a-zA-Z ]*'), Validators.required]),
      price: new FormControl('', [Validators.minLength(2), Validators.pattern('[0-9]*')]),
    }, );
  }

  constructor(private store: Store<BookReducer.State>) { }

  onSubmit() {
    console.warn(this.searchForm.value);
  }

  get title() {
    return this.searchForm.get('title');
  }

  get price() {
    return this.searchForm.get('price');
  }
}

