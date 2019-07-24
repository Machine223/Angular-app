import { Component, OnInit } from '@angular/core';
import{ AboutService }from '../services/about.services';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-single-objet',
  templateUrl: './single-objet.component.html',
  styleUrls: ['./single-objet.component.scss']
})
export class SingleObjetComponent implements OnInit {

  name: string = 'Objet';
  status: string = 'Status';
  
  constructor(private ObjetService : AboutService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']; // va chercher le id mais le garde en string
    this.name = this.ObjetService.getObjetById(+id).name; // en ajoutant + on cast le string en nombre et on peux chercher le name
    this.status = this.ObjetService.getObjetById(+id).status;
  }

}
