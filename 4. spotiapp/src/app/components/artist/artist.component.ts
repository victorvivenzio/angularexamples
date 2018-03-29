import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  public artist:any = {};
  public topTracks:any = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    public _spotifyService:SpotifyService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .map( params => params.id)
    .subscribe(id => {

      this._spotifyService.getArtist( id ).subscribe( response => {
        this.artist = response;
      });

      this._spotifyService.getTopTracks( id ).subscribe( response => {
        this.topTracks = response;
        console.log(response);
      });

    });
  }

}
