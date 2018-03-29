import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  public artists:any[] = [];
  private urlSpotify:string = "https://api.spotify.com/v1/";
  private token:string = "BQC8aa98OnzCJD_DC8RR91ODwKIRzELrmPI6JPwm6yGlXjvqK_FER6NNe8yHGPDg4SNKxPRvUtOFJjf4MMk";

  constructor(
    public http:HttpClient
  ) {
    console.log("Spotify Listo");
  }

  private getHeaders():HttpHeaders{
    let headers:any = new HttpHeaders({
      'authorization':'Bearer ' + this.token
    });
    return headers;
  }

  public getArtist(id:string):any{
    let url:string = `${ this.urlSpotify }artists/${ id }`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  public getArtists(artists:string):any{
    let url:string = `${ this.urlSpotify }search?query=${ artists }&type=artist&limit=20`;

    return this.http.get(url, { headers: this.getHeaders() })
                    .map( ( response:any ) => {
                      return this.artists = response.artists.items;
                    });
  }

  public getTopTracks(id:string):any{
    let url:string = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
    return this.http.get(url, { headers: this.getHeaders() })
                    .map( (reponse:any) => {
                      return reponse.tracks;
                    });
  }

}
