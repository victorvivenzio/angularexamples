import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: 'loading.component.html',
  styles: []
})
export class LoadingComponent {
  public  loading:boolean = false;
  constructor() { }

  public update():void{
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000)
  }


}
