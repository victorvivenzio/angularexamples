import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
})
export class NgClassComponent implements OnInit {
  public classAlert:string = "alert-success" ;
  public properties:Object = {
    danger:true
  }
  constructor() { }

  ngOnInit() {
  }

}
