import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  isPlBetween = true;
  

  constructor(private router: Router, public authService: AuthService) {}
  
  hasToken: boolean = this.authService.isAuthenticated()



  ngOnInit() {}

  logout() {
    this.authService.SignOut()
  }
}
