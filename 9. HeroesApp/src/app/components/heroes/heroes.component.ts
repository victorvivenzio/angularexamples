import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  public heroes: any[] = [];
  public loading: boolean = true;
  constructor(
    private _heroesService: HeroesService
  ) {
    _heroesService.getHeroes().subscribe( data => {
      this.heroes = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  public deleteHero ( key$: string ) {
    this._heroesService.deleteHero( key$ ).subscribe( res => {
      console.log(res)
      if ( res ) {
        console.error(res);
      } else {
        delete this.heroes[key$];
      }
    });
  }

}
