import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() objetsName : string;
  @Input() objetsStatus : string;


  constructor() { }

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
}
