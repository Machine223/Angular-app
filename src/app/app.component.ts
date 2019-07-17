import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  Objets = [
    {
      name : 'Machine a laver',
      status: 'allumé'
    },
    {
      name : 'Television',
      status: 'éteint'
    },  
    {
      name : 'Ordinateur',
      status: 'allumé'
    },
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 3000
    );
  }
  onAlummer(){
    console.log("hello world!");
  }
}
