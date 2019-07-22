import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';

import{ AboutService}from './services/about.services';
import { AuthComponent } from './auth/auth.component';
import { AboutViewComponent } from './about-view/about-view.component'
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: "objets",  component: AboutViewComponent },
  { path: "auth",  component: AuthComponent },
  { path: '',  component: AboutViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AuthComponent,
    AboutViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }


