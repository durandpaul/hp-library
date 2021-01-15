import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookListService } from '../../shared/service/book-list.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  id: string;
  selectedBook: object;
  constructor(private router: Router, private route: ActivatedRoute, private bookService: BookListService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param) {
        this.id = param.id;
        // this.bookService.getBook(param.id).subscribe((book) => {
        //   this.selectedBook = book;
        //   console.log(this.selectedBook);
        // });
      }
    });
  }

  // getSelectedBook() {
  //   this.bookService.getBook().subscribe((book) => {
  //     this.selectedBook = book;
  //   });
  // }

}
