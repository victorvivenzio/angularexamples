import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements OnInit {
  @Input('movies') movies: any[] = [];
  @Input('title') title: string;

  constructor() { }

  ngOnInit() {
  }

}
