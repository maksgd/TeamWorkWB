import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-chart-books',
  template: `
    <button
      mat-stroked-button
      color="accent"
      class="btn-icon"
      style="margin-left: 30px"
      (click)="openDialog()"
    >
      <mat-icon>timeline</mat-icon>
    </button>
  `,
  styleUrls: ['./chart-books.component.scss'],
})
export class ChartBooksComponent implements OnInit {
  constructor(public dialogChart: MatDialog) {}

  openDialog(): void{
    const dialogChartRef = this.dialogChart.open(ChartComponent, {
      disableClose: true,
      width: '600px',
      height: '400px',
    });

    dialogChartRef.backdropClick().subscribe((_) => {
      dialogChartRef.disableClose = true;
    });

    dialogChartRef.afterClosed().subscribe((res) => {
      console.log(`Dialog close: ${res}`);
    });
  }

  ngOnInit(): void {}
}
