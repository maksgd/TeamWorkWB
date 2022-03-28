import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    const newHeader = request.clone({
      headers: request.headers.set('X-header', 'newHeaderElem'),
    });

    // const addHeaderOp = request.clone({ setHeaders: {'X-header': 'newHeaderElem'} });

    return next.handle(newHeader)
      .pipe(
        tap(() => {
          console.log(newHeader);
        }),
        catchError( (error: HttpErrorResponse) => {
            console.log('Interceptor Error: ', error)
            return throwError(error);
        })
      )
  }
}
