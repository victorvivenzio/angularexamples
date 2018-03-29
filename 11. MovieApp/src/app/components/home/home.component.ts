import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public populars: any;
  public onCinema: any;
  public kids: any;
  constructor(
    public _moviesService: MoviesService,
    public router: Router
  ) {

    this._moviesService.getPopulars().subscribe( data => {
      this.populars = data.results;
    } );

    this._moviesService.getOnCinema().subscribe( data => {
      this.onCinema = data.results;
    } );

    this._moviesService.getKids().subscribe( data => {
      this.kids = data.results;
    } );

    this._moviesService.previousPage = this.router.url;
  }

  ngOnInit() {
  }

}
