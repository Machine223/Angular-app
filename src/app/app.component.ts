import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  
  objetsNameOne = 'Machine a laver';
  objetsNameTwo = 'Television';
  objetsNameThree = "Ordinateur";
  on = "allumé";
  off = "éteint";
  
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
        this.off = "allumé";
      }, 3000
    );
  }
  onAlummer(){
    console.log("hello world!");
  }
}
