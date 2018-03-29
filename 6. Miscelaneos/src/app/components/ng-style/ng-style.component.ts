import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">
      Prueba de NgStyle!
    </p>

    <button class="btn btn-primary" (click)="size = size + 5">
      <fa name="plus" ></fa>
    </button>

    <button class="btn btn-primary" (click)="size = size - 5">
      <fa name="minus" ></fa>
    </button>
  `,
  styles: []
})
export class NgStyleComponent {
  public size:number = 10;
  constructor() { }
}
