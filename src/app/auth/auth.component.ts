import { Component, OnInit } from '@angular/core';
import{ AuthService}from '../services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then( //then est execute quand cest terminer seulement
      () => {
        console.log("Connexion réussi!");
        this.authStatus = this.authService.isAuth; // mettre a jour authStatus
        this.router.navigate(['objets']);
      }
    );
  }
  onSignOut(){
    console.log("Deconnexion réussi!");
    this.authService.signOut();// applique la fonction simplement
    this.authStatus = this.authService.isAuth; // mettre a jour authStatus
  }

}
