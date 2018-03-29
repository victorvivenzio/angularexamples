import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  public hero:Hero;
  public imgDc:string = "assets/img/dc.png";
  public imgMarvel:string = "assets/img/marvel.jpg";

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.hero = this._heroesService.getHero(params['id']);
    });
  }

}
