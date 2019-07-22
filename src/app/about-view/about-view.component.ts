import { Component, OnInit } from '@angular/core';
import{AboutService}from '../services/about.services';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss']
})
export class AboutViewComponent implements OnInit {

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
