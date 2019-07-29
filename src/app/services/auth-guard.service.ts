import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.services';
import { Injectable } from '@angular/core';

@Injectable() // À faire en sorte que l'on puisse y injecter un autre service
// @Component, @Pipe, et @Directive sont des sous classes de @Injectable(). Peut-etre mis par defaut 
// pour eviter des [problemes] dans un projet

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isAuth){
        return true;
    } else{
        this.router.navigate(['/auth']) ;
    }
  }
}