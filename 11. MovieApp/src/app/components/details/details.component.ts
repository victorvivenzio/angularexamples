import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {
  public movieId: string;
  public movie: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public _moviesService: MoviesService,
    public router: Router
  ) {
    this.activatedRoute.params.subscribe( ( params: Params ) => {
      this.movieId = params['id'];

      this._moviesService.getMovie( this.movieId ).subscribe( ( data ) => {
        this.movie = data ;
      } );
    });
  }

  ngOnInit() {
    console.log(this.movieId);
  }

  public return(): void {
    let previousRoute: string[] = [];
    if ( this._moviesService.previousPage ) {
      previousRoute.push( this._moviesService.previousPage );
    } else {
      previousRoute.push( '/home' );
    }
    this.router.navigate( previousRoute );

  }

}
