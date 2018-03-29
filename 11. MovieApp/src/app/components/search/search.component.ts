import { Component, OnChanges } from '@angular/core';
import { MoviesService} from '../../services/movies.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnChanges {
  public search: string;
  public movies: any;
  constructor(
    public _moviesService: MoviesService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this._moviesService.previousPage = this.router.url;
    this.activatedRoute.params.subscribe( ( params: Params ) => {
      if (params['search']) {
        this.search = params['search'] ? params['search'] : null ;
        this.searchMovie();
      }
    });

  }

  ngOnChanges() {
  }

  public searchMovie(): void {
    if (this.search.length > 0) {
      this._moviesService.getSearchMovies( this.search ).subscribe( data => {
        this._moviesService.previousPage = `/search/${ this.search }` ;
        this.movies = data.results;
        this.router.navigate(['/search', this.search]);
      });
    }
  }

}
