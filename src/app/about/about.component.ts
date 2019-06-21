import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  objetsName = 'Machine a laver';
  objetsStatus = 'Eteint';


  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    return this.objetsStatus;
  }
}
