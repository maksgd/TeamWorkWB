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
        <button mat-mini-fab style="margin-left: 30px"  routerLink="/book/table-books" [class]="onActive(6)">
          table
        </button>

        <app-chart-books></app-chart-books>
        
      </div>
    </div>
  `,
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  onActive(page: number): string {
    let url = window.location.href
    let curPage: string = ''
  
    if ((url.slice(url.length - 11)) === 'table-books') {
      curPage = 6 == page ? 'active' : 'notactive'
    } else {
      curPage = Number(url.slice(url.length - 1)) == page ? 'active' : 'notactive'
    }

    return curPage
  }

  ngOnInit(): void {
  }

}
