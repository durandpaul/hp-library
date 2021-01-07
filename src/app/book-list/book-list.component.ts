import { Component, OnInit } from '@angular/core';

import {BookListService} from '../shared/service/book-list.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  theBookList: object;

  constructor(private booklist: BookListService) { }

  ngOnInit() {
    this.getAllBook();
  }

  getAllBook() {
    this.booklist.getBookList().subscribe((data) => {
      this.theBookList = data;
    });
  }
}
