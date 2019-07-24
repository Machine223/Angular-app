import { Component, OnInit } from '@angular/core';

declare function myMethod(): any;
@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.scss']

})
export class FourOhFourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    myMethod();
  }
  

}
