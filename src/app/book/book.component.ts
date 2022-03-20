import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  template: `

    <div class="container">
      <app-header></app-header>

      <router-outlet></router-outlet>
    
      <app-paginator></app-paginator>
      
    </div>
  `,
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
