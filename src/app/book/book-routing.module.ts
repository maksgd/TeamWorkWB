import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { ListFiveComponent } from './list-five/list-five.component';
import { ListFourComponent } from './list-four/list-four.component';
import { ListOneComponent } from './list-one/list-one.component';
import { ListThreeComponent } from './list-three/list-three.component';
import { ListTwoComponent } from './list-two/list-two.component';

const routes: Routes = [
  { path: 'book', redirectTo: '/book', pathMatch: 'full' },
  { path: 'list-one', component: ListOneComponent },
  { path: 'list-two', component: ListTwoComponent },
  { path: 'list-three', component: ListThreeComponent },
  { path: 'list-four', component: ListFourComponent },
  { path: 'list-five', component: ListFiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
