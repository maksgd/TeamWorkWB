import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, concat, map, Observable, of, tap } from 'rxjs';
import { MessageService } from '../../message.service';
import { IBookElement, ICartElement, IDataBook } from './book';

@Injectable({
  providedIn: 'root',
})
export class TableBooksService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`Table-books: ${message}`);
  }

  urlBook: string = 'http://localhost:4200/api';

  // SET 1
  getHttpCarts() {
    const temp = this.http.get<ICartElement[]>(`${this.urlBook}/books.json`, {headers: {"Get": "Set 1"}})

    return temp.pipe(map((data:any) => {
      return data.set1.data
    }))
  }
  
  getCarts(): Observable<ICartElement[]> {
    return this.getHttpCarts().pipe(
      catchError(this.handleError<ICartElement[]>('get SET-1'))
    )
  }

  // SET 2
  getHttpDataBook() {
    const temp = this.http.get<IDataBook[]>(`${this.urlBook}/books.json`, {headers: {"Get": "Set 2"}})

    return temp.pipe(map((data:any) => {
      return data.set2.data
    }))
  }
  
  getDataBook(): Observable<IDataBook[]> {
    return this.getHttpCarts().pipe(
      catchError(this.handleError<IDataBook[]>('get SET-2'))
    )
  }

  // Concat Of Date
  getBooks(): Observable<IBookElement[]> {
    return concat(
      this.getHttpCarts(),
      this.getHttpDataBook()
    ).pipe(
      tap((_) => this.log('fetched set data of books')),
      catchError(this.handleError<IBookElement[]>('getBooks', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
