import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from '../interfaces/hero.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesService {

  public heroesUrl: string = 'https://heroesapp-b3de5.firebaseio.com/heroes.json';
  public heroUrl: string = 'https://heroesapp-b3de5.firebaseio.com/heroes';

  constructor(
    private http: Http
  ) { }

  public newHero( hero: Hero ) {
    let body = JSON.stringify( hero );
    let headers = new Headers({
      'content-type': 'application/json'
    });

    return this.http.post( this.heroesUrl, body, { headers })
      .map( res => {
        console.log(res.json());
        return res.json();
      });
  }

  public editHero( hero: Hero, key$: string ) {
    let body = JSON.stringify( hero );
    let headers = new Headers({
      'content-type': 'application/json'
    });
    let editUrl: string = `${ this.heroUrl }/${ key$ }.json`;

    return this.http.put( editUrl , body, { headers })
      .map( res => {
        console.log(res.json());
        return res.json();
      });
  }

  public getHero( key$: string) {
    let getUrl = `${ this.heroUrl }/${ key$ }.json`;
    return this.http.get( getUrl )
      .map( res => {
        console.log(res.json());
        return res.json();
      });
  }

  public getHeroes() {
    return this.http.get( this.heroesUrl )
      .map( res => {
        console.log(res.json());
        return res.json();
      });
  }

  public deleteHero( key$: string ){
    let deleteUrl = `${ this.heroUrl }/${ key$ }.json`;
    return this.http.delete( deleteUrl )
      .map( res => res.json() );
  }
}
