import { Component, Input, OnInit } from '@angular/core';
import{AboutService}from '../services/about.services';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() objetsName : string;
  @Input() objetsStatus : string;
  @Input() indexOfAbout: number;
  @Input() id : number;


  constructor(private objetService: AboutService,
              private alerts: AlertsService ) { }

  ngOnInit() {
    
  }

  getStatus(){
    return this.objetsStatus;
  }
  getColor(){
    if(this.objetsStatus === "allumé"){
      return 'green';
    }else{
      return 'red';
    }
  }

  onSwitch(){
    if(this.objetsStatus === 'allumé') {
      this.objetService.switchOffOne(this.indexOfAbout);
    } else if(this.objetsStatus === 'éteint') {
      this.objetService.switchOnOne(this.indexOfAbout);
    }
  }
}
