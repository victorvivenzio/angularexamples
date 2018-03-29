import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public videos: any[] = [];
  public videoSel: any;

  constructor(
    public _youtubeServices: YoutubeService
  ) {
    this._youtubeServices.getVideos().subscribe( data => {
      this.videos = data;
      console.log(this.videos);
    });
  }

  ngOnInit() {
  }

  public watchVideo( video: any ): void {
    this.videoSel = video;
    $('#myModal').modal();
  }

  public  closeVideo() {
    this.videoSel = null;
    $('#myModal').modal('hide');
  }

  public loadMore() {
    this._youtubeServices.getVideos().subscribe( data => {
      this.videos.push.apply( this.videos, data );
    });
  }
}
