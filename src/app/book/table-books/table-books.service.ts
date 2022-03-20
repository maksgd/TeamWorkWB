import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from '../../message.service';
import{ BookElement } from './book'

@Injectable({
  providedIn: 'root'
})
export class TableBooksService {
  
  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`Table-books: ${message}`);
  }

  urlBook: string = 'api/bookArr';
  urlCart: string = 'api/cartArr';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
  getBooks(): Observable<BookElement[]> {
    return this.http.get<BookElement[]>(this.urlBook).pipe(
        tap(_ => this.log('fetched books')),
        catchError(this.handleError<BookElement[]>('getBooks'))
    )
  }

  getCarts(): Observable<BookElement[]> {
    return this.http.get<BookElement[]>(this.urlCart).pipe(
        tap(_ => this.log('fetched carts')),
        catchError(this.handleError<BookElement[]>('getCarts'))
    )
  }
}

