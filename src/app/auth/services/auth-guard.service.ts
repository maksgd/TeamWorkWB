import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { log, timeStamp } from 'console';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor( private authService: AuthService, public router: Router) {}

  setExpDate(user: any) {
    user.stsTokenManager.expirationTime+=3600;
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const temp = this.authService.userData;

      if (localStorage.getItem('user')) {
        console.log(temp.multiFactor.user.stsTokenManager.expirationTime >= Date.now() + 600000? true : false );

        temp.multiFactor.user.stsTokenManager.expirationTime+=3600000;

        console.log(temp.multiFactor.user.stsTokenManager);
        return true;
      } else {
        this.router.navigate(['login'])
        return false;
      }
  }

}
