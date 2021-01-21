import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})

export class BookListService {

  apiUrl = 'https://henri-potier.techx.fr/books';
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
      }
    )
  };

  constructor(private http: HttpClient) { }

  getBookList() {
    return this.http.get<Book[]>(`${this.apiUrl}`, this.httpOptions);
  }

  // getBook(id: string) {
  //   return this.http.get(`${this.apiUrl}/${id}`, this.httpOptions);
  // }
}

