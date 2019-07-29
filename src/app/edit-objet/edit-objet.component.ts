import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-objet',
  templateUrl: './edit-objet.component.html',
  styleUrls: ['./edit-objet.component.scss']
})
export class EditObjetComponent implements OnInit {

  defaultOnOff :string = 'Éteint';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }

}
