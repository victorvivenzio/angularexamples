import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public heroes:Hero[] = [];
  public q:string = "";

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService
  ) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.q = params['q'];
      this.heroes = this._heroesService.searchHeroes(this.q);
    });
  }

}
