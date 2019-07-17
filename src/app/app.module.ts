import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyFirstComponent } from './my-first/my-first.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import{AboutService}from './services/about.services'

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }


