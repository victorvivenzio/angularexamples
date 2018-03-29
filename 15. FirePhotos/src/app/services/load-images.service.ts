import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

import { FileItem } from '../models/file-item';

@Injectable()
export class LoadImagesService {

  private images_folder = 'images';

  constructor(
    public _angularFirestore: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  public loadImageFirebase ( images: FileItem[] ) {
    for ( const image of images ) {

      image.loading = true;
      const file = image.file;
      const task = this.storage.upload( `${ this.images_folder }/${ image.filename }`, file);

      // observe percentage changes
      task.percentageChanges().subscribe( percent => {
        image.progress = percent;
        if ( percent == 100 ) {
          image.loading = false;
        }
      });

      task.downloadURL().subscribe( url => {
        if( url ){
          const imageData = {
            name: image.filename,
            url: url
          }
          this.saveImage ( imageData );
        }
      });
    }
  }

  public saveImage ( image: { name: string, url: string }) {
    this._angularFirestore.collection( this.images_folder )
      .add( image );
  }

}
