import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { IBookElement, IDataBook, ICartElement } from './book';
import { TableBooksService } from './table-books.service';
import { ChartInfoService } from '../chart-books/chart-info.service';

@Component({
  selector: 'app-table-books',
  template: `
    <!-- TABLE-BOOKS -->

    <table
      mat-table
      [dataSource]="dataBooks"
      multiTemplateDataRows
      class="mat-elevation-z8"
    >
      <ng-container
        matColumnDef="{{ column }}"
        *ngFor="let column of columnsToDisplay"
      >
        <th mat-header-cell *matHeaderCellDef>
          {{
            column === 'id'
              ? 'id'
              : column === 'title'
              ? 'Название'
              : column === 'qtyRelease'
              ? 'Тираж (шт)'
              : ''
          }}
        </th>
        <td mat-cell *matCellDef="let element">{{ element[column] }}</td>
        <th mat-header-cell *matFooterCellDef>
          {{
            column === 'id'
              ? 'итого продано'
              : column === 'title'
              ? ''
              : column === 'qtyRelease'
              ? getTotalCost()
              : ''
          }}
        </th>
        <!-- Footer -->
      </ng-container>

      <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->
      <ng-container matColumnDef="expandedDetail">
        <td
          mat-cell
          *matCellDef="let element"
          [attr.colspan]="columnsToDisplay.length"
        >
          <div
            class="example-element-detail"
            [@detailExpand]="
              element == expandedElement ? 'expanded' : 'collapsed'
            "
          >
            <div class="example-element-diagram">
              <div class="example-element-name">{{ element.title }}</div>
            </div>
            <div class="example-element-description">
              {{ description }}
            </div>
          </div>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
      <tr
        mat-row
        *matRowDef="let element; columns: columnsToDisplay"
        class="example-element-row"
        [class.example-expanded-row]="expandedElement === element"
        (click)="expandedElement = expandedElement === element ? null : element"
        (click)="bookRow(element)"
      ></tr>
      <tr
        mat-row
        *matRowDef="let row; columns: ['expandedDetail']"
        class="example-detail-row"
      ></tr>
      <tr mat-footer-row *matFooterRowDef="columnsToDisplay"></tr>
    </table>
    <!-- /TABLE-BOOKS -->
  `,
  styleUrls: ['./table-book.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('700ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableBooksComponent implements OnInit {
  constructor(
    private tableBooksService: TableBooksService,
    private ChartToInfo: ChartInfoService
  ) {}

  cart$ = this.tableBooksService.getCarts();

  dataBooks: IBookElement[] = [];
  books: IBookElement[] = [];

  columnsToDisplay: string[] = ['id', 'title', 'qtyRelease'];
  description: string | null = null;
  expandedElement: IBookElement | null | undefined;

  getBooks(): void {
    this.tableBooksService.getBooks().subscribe((book) => {
      this.books = book;
      this.addStreamBook();
    });
    // this.tableBooksService.getHttpDataBook().subscribe((book) => {
    //   console.log(book.length);
    // })
  }

  addStreamBook(): void {
    if (this.dataBooks.length) {
      this.dataBooks.map((cart) =>
        Object.assign(
          cart,
          this.books.find((book: IDataBook) => book.id == cart.id)
        )
      )
      this.ChartToInfo.saveData(this.books);
    } else {
      this.dataBooks = this.books;
    }
  }

  getCarts(row: number): void {
    this.cart$.subscribe((cart) => (this.description = cart[row].description));
  }

  bookRow(row: IDataBook): void {
    this.getCarts(row.id - 1);
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getTotalCost(): number {
    return this.dataBooks
      .map((b) => b.qtyRelease)
      .reduce((acc, value) => acc + value, 0);
  }
}
