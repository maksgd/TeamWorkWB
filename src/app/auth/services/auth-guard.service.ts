import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  constructor( private authService: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (localStorage.getItem('user')) {
        this.authService.refreshTokenIfNeeded();

        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
