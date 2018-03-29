import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  public apikey: string = '086185549e252ff6278b81b3ab313c2b';
  public urlMovieDb: string = 'https://api.themoviedb.org/3';
  private _previousPage: string;

  constructor(
    public jsonp: Jsonp
  ) { }

  public getPopulars() {
    const urlPopulars: string = `${ this.urlMovieDb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&callback=JSONP_CALLBACK`;
    return this.jsonp.get( urlPopulars ).map( (data) => data.json() );

  }

  public getOnCinema() {
    const urlOnCinema: string = `${ this.urlMovieDb }/movie/now_playing?region=us&sort_by=release_date.desc&api_key=${ this.apikey }&callback=JSONP_CALLBACK`;
    return this.jsonp.get( urlOnCinema ).map( (data) => data.json() );
  }

  public getKids() {
    const urlKids: string = `${ this.urlMovieDb }/discover/movie?region=us&sort_by=popularity.desc&with_genres=16&api_key=${ this.apikey }&callback=JSONP_CALLBACK`;
    return this.jsonp.get( urlKids ).map( (data) => data.json() );
  }

  public getMovie( id: string ) {
    const urlMovie: string = `${ this.urlMovieDb }/movie/${ id }?&api_key=${ this.apikey }&callback=JSONP_CALLBACK`;
    return this.jsonp.get( urlMovie ).map( (data) => data.json() );
  }

  public getSearchMovies( search: string ) {
    const urlSearch: string = `${ this.urlMovieDb }/search/movie?&api_key=${ this.apikey }&language=en-US&query=${ search }&include_adult=false&callback=JSONP_CALLBACK`;
    return this.jsonp.get( urlSearch ).map( (data) => data.json() );
  }

  set previousPage(value: string) {
    this._previousPage = value;
  }

  get previousPage(): string {
    return this._previousPage;
  }
}
