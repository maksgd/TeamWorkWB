import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  




  //  GUARD
  token = ('has')

  isAuthenticated(): boolean {
    return !!this.token
  }
}
