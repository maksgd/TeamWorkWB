import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `

    <router-outlet></router-outlet>
    
  `,
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
