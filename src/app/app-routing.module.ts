import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';
import { bookRoutes } from './book/book-routing.module';

const routes: Routes = [
  { path:'', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path:'book', children:[...bookRoutes] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }