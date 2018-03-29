import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  public search: string;

  constructor(
    public router: Router,
    public _moviesService: MoviesService
  ) {
  }

  ngOnInit() {

  }

  public searchMovie(): void {
    if (this.search) {
      this.router.navigate(['/search', this.search ]);
      this._moviesService.previousPage = this.router.url;
    }
  }

}
