import { Component, OnInit } from '@angular/core';
import { HeroesService,Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  public heroes:Hero[];

  constructor(
    private _heroesService:HeroesService,
    private _router:Router
  ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  public showHero(i:number):void{
    this._router.navigate(['/hero',i]); 
  }

}
