import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { ListFiveComponent } from './list-five/list-five.component';
import { ListFourComponent } from './list-four/list-four.component';
import { ListOneComponent } from './list-one/list-one.component';
import { ListThreeComponent } from './list-three/list-three.component';
import { ListTwoComponent } from './list-two/list-two.component';
import { TableBooksComponent } from './table-books/table-books.component';

export const bookRoutes: Routes = [
  { path: '', 
    component: BookComponent, 
    children: [
    { path:'', redirectTo:'1', pathMatch:'full' },
    { path: '1', component: ListOneComponent },
    { path: '2', component: ListTwoComponent },
    { path: '3', component: ListThreeComponent },
    { path: '4', component: ListFourComponent },
    { path: '5', component: ListFiveComponent },
    { path: '6', component: TableBooksComponent }
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
