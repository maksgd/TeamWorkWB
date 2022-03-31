import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor( private hasToken: AuthService) {}

  canActivate(): boolean {
    let hasToken: boolean
    hasToken = (this.hasToken.isAuthenticated()) ? true : false

    return hasToken
  }
}
