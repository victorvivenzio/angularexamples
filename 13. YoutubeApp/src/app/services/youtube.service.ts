import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeService {

  private youtubeApiUtl: string = 'https://www.googleapis.com/youtube/v3';
  private apikey: string = 'AIzaSyA8OsCMFnSlLSmagL9580dDgHiApAUm5CI';
  private uploadkey: string = 'UUuaPTYj15JSkETGnEseaFFg';
  public nextPageToken: string = '';

  constructor(
    public http: Http
  ) { }

  public getVideos() {
    let url: string = `${ this.youtubeApiUtl }/playlistItems`;
    let params = new URLSearchParams();

    params.set( 'part', 'snippet' );
    params.set( 'maxResults', '10' );
    params.set( 'playlistId', this.uploadkey );
    params.set( 'key', this.apikey );

    if ( this.nextPageToken ) {
      params.set( 'pageToken', this.nextPageToken );
    }

    return this.http.get( url, {search: params} )
      .map( response => {
        this.nextPageToken = response.json().nextPageToken;

        let videos: any[] = [];

        for ( let video of response.json().items ) {
          videos.push( video.snippet );
        }

        return videos;
      } );
  }
}
