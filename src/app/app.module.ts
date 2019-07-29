import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';

import{ AboutService}from './services/about.services';
import{ AuthService}from './services/auth.services';
import { AuthComponent } from './auth/auth.component';
import { AboutViewComponent } from './about-view/about-view.component'
import { RouterModule, Routes } from '@angular/router';
import { SingleObjetComponent } from './single-objet/single-objet.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

// Import your library
import { AlertsModule } from 'angular-alert-module';
import { AuthGuard } from './services/auth-guard.service';
import { EditObjetComponent } from './edit-objet/edit-objet.component';

const appRoutes: Routes = [
  { path: "objets", canActivate:[AuthGuard],  component: AboutViewComponent },
  { path: "objets/:id",canActivate:[AuthGuard], component: SingleObjetComponent}, 
  { path: "auth",  component: AuthComponent },
  { path: '', canActivate:[AuthGuard], component: AboutViewComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo:'/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AuthComponent,
    AboutViewComponent,
    SingleObjetComponent,
    FourOhFourComponent,
    EditObjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AlertsModule.forRoot()
  ],
  providers: [AboutService,AuthService,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }


