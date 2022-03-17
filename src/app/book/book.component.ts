import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  template: `

    <div class="container">
      <app-header></app-header>

      <nav class="placeBetween">
        <a routerLink="/list-one">1</a>
        <a routerLink="/list-two">2</a>
        <a routerLink="/list-three">3</a>
        <a routerLink="/list-four">4</a>
        <a routerLink="/list-five">5</a>
      </nav>

      <router-outlet></router-outlet>
    
    </div>
  `,
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
