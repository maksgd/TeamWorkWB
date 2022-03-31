import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }






  //  GUARD
  token = ('has')

  isAuthenticated(): boolean {
    return !!this.token
  }
}
