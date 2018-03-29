import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent  {

  public user: Object = {
    name: null,
    lastname: null,
    email: null,
    country: '',
    gender: 'male',
    terms: false
  };

  public countries: Object[] = [
    {
      codigo: 'VEN',
      name: 'Venezuela'
    },
    {
      codigo: 'COL',
      name: 'Colombia'
    }
  ];
  constructor() { }

  public save( forma: NgForm ): void {
    console.log(forma);
    console.log(forma.value);
    console.log(this.user);
  }
}
