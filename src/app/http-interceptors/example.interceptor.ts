import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
  private base64 = btoa('HelloWb:admin');
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const newHeader = request.clone({
    //   headers: request.headers.set('Authorization', 'newHeaderElem'),
    // });
    console.log('meow');

    const addHeader = request.clone({
      setHeaders: { Authorization: `Basic ${this.base64}` },
    });

    return next.handle(addHeader).pipe(
      tap(() => {
        console.log(addHeader);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        console.log('Interceptor Error: ', error);
        return throwError(error);
      })
    );
  }
}
