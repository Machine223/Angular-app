import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AboutService } from '../services/about.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-objet',
  templateUrl: './edit-objet.component.html',
  styleUrls: ['./edit-objet.component.scss']
})
export class EditObjetComponent implements OnInit {

  defaultOnOff :string = 'Éteint';

  constructor(private objetService: AboutService,
              private router : Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    const name = form.value['name']; // comment recuperer les donner du formulaire
    const status = form.value['status'];
    this.objetService.addObjet(name,status); // appel la fonction dans notre service avec les argument recuperer
    this.router.navigate(["objets"]);
  }


}
