import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  public termino:string = "";
  public artists:any[] = [];
  constructor(
    public _spotifyService:SpotifyService
  ) {}

  public searchArtists(){
    if(this.termino.length < 2){
      return;
    }
    this._spotifyService.getArtists(this.termino)
    .subscribe(artist => {
      this.artists = artist;
      console.log(this.artists)
    });
  }

}
