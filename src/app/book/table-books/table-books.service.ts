import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from '../../message.service';
import{ IBookElement } from './book'

@Injectable({
  providedIn: 'root'
})
export class TableBooksService {
  
  constructor(
    private http: HttpClient, 
    private messageService: MessageService) { }

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
  
  getBooks(): Observable<IBookElement[]> {
    return this.http.get<IBookElement[]>(this.urlBook).pipe(
        tap(_ => this.log('fetched books')),
        catchError(this.handleError<IBookElement[]>('getBooks'))
    )
  }

  getCarts(): Observable<IBookElement[]> {
    return this.http.get<IBookElement[]>(this.urlCart).pipe(
        tap(_ => this.log('fetched carts')),
        catchError(this.handleError<IBookElement[]>('getCarts'))
    )
  }
}

