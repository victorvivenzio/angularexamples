import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p> 
      perrito
    </p>
  `,
  styles: [`
    p {
      color: #b5b5b5;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
