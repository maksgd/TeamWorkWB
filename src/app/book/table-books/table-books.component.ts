import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-table-books',
  template: `
  <!-- TABLE-BOOKS -->

  <table mat-table
        [dataSource]="dataSource" multiTemplateDataRows
        class="mat-elevation-z8">
    <ng-container matColumnDef="{{column}}" *ngFor="let column of columnsToDisplay">
      <th mat-header-cell *matHeaderCellDef> {{column}} </th>
      <td mat-cell *matCellDef="let element"> {{element[column]}} </td>
    </ng-container>

    <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->
    <ng-container matColumnDef="expandedDetail">
      <td mat-cell *matCellDef="let element" [attr.colspan]="columnsToDisplay.length">
        <div class="example-element-detail"
            [@detailExpand]="element == expandedElement ? 'expanded' : 'collapsed'">
          <div class="example-element-diagram">
            <div class="example-element-name"> {{element.name}} </div>
          </div>
          <div class="example-element-description">
            {{element.description}}
          </div>
        </div>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
    <tr mat-row *matRowDef="let element; columns: columnsToDisplay;"
        class="example-element-row"
        [class.example-expanded-row]="expandedElement === element"
        (click)="expandedElement = expandedElement === element ? null : element">
    </tr>
    <tr mat-row *matRowDef="let row; columns: ['expandedDetail']" class="example-detail-row"></tr>
  </table>

  <!-- /TABLE-BOOKS -->
  `,
  styleUrls: ['./table-book.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableBooksComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'name', 'things'];
  expandedElement: PeriodicElement | null | undefined;
}
  
export interface PeriodicElement {
  id: number;
  name: string;
  things: number;
  description: string;
}
  
const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'Harry Potter',
    things: 100,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    id: 2,
    name: 'Harry Potter',
    things: 10,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  }
];
