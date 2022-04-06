import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/services/auth.service';
import { HostService } from './host.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  isPlBetween = true;
  hostNameApp: string = '';

  constructor(public host: HostService, public authService: AuthService) {
    this.hostNameApp = this.host.hostName;
  }

  // localeList = [
  //   { code: 'en-US', label: 'English' },
  //   { code: 'ru', label: 'Русский' }
  // ]

  hasToken: boolean = this.authService.isAuthenticated();

  logout(): void {
    this.authService.SignOut();
  }

  ngOnInit(): void {
    console.log(`Host: ${this.hostNameApp}`);
  }
}
