import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import{AboutService}from './services/about.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  isAuth = false;
  //myDate = new Date();
  
  lastUpdate = new Promise((resolve,reject) =>{
    const date = new Date();
    setTimeout(
      () => {
      resolve(date);
    }, 2000);
  });

  Objets: any[];
 

  constructor(private monService: AboutService ) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 3000
    );
  }
  onAlummer(){
    console.log("Button ON");
    this.monService.switchOnAll();
  }

  onEteindre(){
    console.log("Boutton OFF");
    this.monService.switchOffAll();
  }
  ngOnInit(){
    this.Objets = this.monService.Objets
  }
}
