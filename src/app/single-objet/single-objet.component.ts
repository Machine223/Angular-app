import { Component, OnInit } from '@angular/core';
import{ AboutService }from '../services/about.services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
 
@Component({
  selector: 'app-single-objet',
  templateUrl: './single-objet.component.html',
  styleUrls: ['./single-objet.component.scss']
})
export class SingleObjetComponent implements OnInit {

  name: string = 'Objet';
  status: string = 'Status';
  secondes: number;
  
  constructor(private ObjetService : AboutService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']; // va chercher le id mais le garde en string
    this.name = this.ObjetService.getObjetById(+id).name; // en ajoutant + on cast le string en nombre et on peux chercher le name
    this.status = this.ObjetService.getObjetById(+id).status;
    
    // code pour lobservable qui compte le temps quon reste sur cette page 
    // subscribe peut prendre jusqua 3 arguments
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value) => {
        this.secondes = value;
        console.log("L'observable commence à compter!");
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

}
