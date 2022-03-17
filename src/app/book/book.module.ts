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


@NgModule({
  declarations: [
    ListOneComponent,
    BookComponent,
    ListTwoComponent,
    HeaderComponent,
    ListThreeComponent,
    ListFourComponent,
    ListFiveComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule
  ]
})
export class BookModule { }
