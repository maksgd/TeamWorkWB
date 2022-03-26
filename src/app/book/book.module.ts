import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BookRoutingModule } from './book-routing.module';

import { ListOneComponent } from './list-one/list-one.component';
import { BookComponent } from './book.component';
import { ListTwoComponent } from './list-two/list-two.component';
import { HeaderComponent } from './header/header.component';

import { ListThreeComponent } from './list-three/list-three.component';
import { ListFourComponent } from './list-four/list-four.component';
import { ListFiveComponent } from './list-five/list-five.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { TableBooksComponent } from './table-books/table-books.component';
import { ChartBooksComponent } from './chart-books/chart-books.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ChartComponent } from './chart-books/chart/chart.component';


@NgModule({
  declarations: [
    ListOneComponent,
    BookComponent,
    ListTwoComponent,
    HeaderComponent,
    ListThreeComponent,
    ListFourComponent,
    ListFiveComponent,
    PaginatorComponent,
    TableBooksComponent,
    ChartBooksComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule, MatButtonModule, MatTableModule, MatIconModule, MatDialogModule
  ]
})
export class BookModule { }
