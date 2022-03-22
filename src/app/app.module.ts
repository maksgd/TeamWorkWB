import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { ReactiveFormsModule, FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FenceCasePipe } from './fence-case.pipe';
import { BookModule } from './book/book.module';
import { DirectiveDirective } from './directives/directive.directive';
import { TextModificatorDirective } from './directives/text-modificator.directive';
import { RainbowTextDirective } from './directives/rainbow-text.directive';
import { TextModificatorHostDirective } from './directives/text-modificator-host.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    FenceCasePipe,
    DirectiveDirective,
    TextModificatorDirective,
    RainbowTextDirective,
    TextModificatorHostDirective

  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, MatSliderModule, MatCheckboxModule, MatInputModule, MatButtonModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule, HttpClientModule, BookModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
