import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';
import { bookRoutes } from './book/book-routing.module';
import { FormComponentComponent } from './form/form.component';
import { authRoutes } from './auth/auth-routing.module';
import { AuthGuardService } from './auth/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo:'/auth', pathMatch:'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [AuthGuardService] },
  { path: 'form', component: FormComponentComponent, canActivate: [AuthGuardService] },
  { path: 'book', children:[...bookRoutes] },
  { path: 'auth', children:[...authRoutes], canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
