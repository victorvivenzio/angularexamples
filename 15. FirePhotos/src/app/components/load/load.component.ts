import { Component, OnInit } from '@angular/core';
import { LoadImagesService } from '../../services/load-images.service';
import {FileItem} from '../../models/file-item';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styles: []
})
export class LoadComponent implements OnInit {
  public overElement = false;
  public files: FileItem[] = [];

  constructor(
    public _loadImagesService: LoadImagesService
  ) { }

  ngOnInit() {
  }

  public fileOver( event: any ) {
    this.overElement = event ;
  }

  public loadImages() {
    this._loadImagesService.loadImageFirebase( this.files );
  }

  public deleteFiles (){
    this.files = [];
  }

}
