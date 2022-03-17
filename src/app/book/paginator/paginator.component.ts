import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  template: `
    <div class="window">
  <div class="paginator">
    <button mat-mini-fab routerLink="/book/1" [class]="onActive(1)">
      1
    </button>
    <button mat-mini-fab routerLink="/book/2" [class]="onActive(2)">
      2
    </button>
    <button mat-mini-fab routerLink="/book/3" [class]="onActive(3)">
      3
    </button>
    <button mat-mini-fab routerLink="/book/4" [class]="onActive(4)">
      4
    </button>
    <button mat-mini-fab routerLink="/book/5" [class]="onActive(5)">
      5
    </button>
  </div>
</div>
  `,
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let url = window.location.href
    console.log(url.slice(url.length - 1))
  }

  onActive(page: number): string {
    let url = window.location.href
    return Number(url.slice(url.length - 1)) == page ? 'active' : 'notactive'
  }


}
