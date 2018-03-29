import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private _router:Router
  ) {
    // this._router.onSameUrlNavigation = 'reload';
  }

  ngOnInit() {
  }

  public searchHeroes(q:string){
    // console.log(`busqueda de ${ q }`);\
    this._router.navigate(['/search',q]);
  }
}
