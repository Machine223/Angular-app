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
    this.name = this.route.snapshot.params['id'];
  }

}
