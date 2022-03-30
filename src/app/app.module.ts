import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FenceCasePipe } from './fence-case.pipe';
import { BookModule } from './book/book.module';
import { DirectiveDirective } from './directives/directive.directive';
import { TextModificatorDirective } from './directives/text-modificator.directive';
import { RainbowTextDirective } from './directives/rainbow-text.directive';
import { TextModificatorHostDirective } from './directives/text-modificator-host.directive';
import { FormComponentComponent } from './form/form.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { MatNativeDateModule } from '@angular/material/core';
import { httpInterceptorProviders } from './http-interceptors';
import { AUTH_API_URL } from './app-injection-tokens';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    FenceCasePipe,
    DirectiveDirective,
    TextModificatorDirective,
    RainbowTextDirective,
    TextModificatorHostDirective,
    FormComponentComponent

  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, MatSliderModule, MatCheckboxModule, MatInputModule, MatButtonModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule, HttpClientModule, BookModule, ReactiveFormsModule, MatChipsModule, MatIconModule, MatNativeDateModule,
    // JwtModule.forRoot({

    // })
  ],
  providers: [
    httpInterceptorProviders,
    {
      provide: AUTH_API_URL,
      useValue: environment.authApi
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
