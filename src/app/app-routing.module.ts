import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';
import { bookRoutes } from './book/book-routing.module';
import { FormComponentComponent } from './form/form.component';

const routes: Routes = [
  { path:'', redirectTo:'/form', pathMatch:'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'form', component: FormComponentComponent },
  { path:'book', children:[...bookRoutes] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }