import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chart',
  template: `

    <div class="chart">

      <h1 mat-dialog-title>График продаж</h1>

      <mat-dialog-content>

      

      </mat-dialog-content>

      <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="true">Close</button>
      </mat-dialog-actions>
      
    </div>
  `,
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
