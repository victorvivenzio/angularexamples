import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import {FileItem} from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() files: FileItem[] = [];
  @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragOver( event: any ) {
    this.mouseOver.emit( true );
    this._preventStop( event );
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave( event: any ) {
    this.mouseOver.emit( false );
  }

  @HostListener('drop', ['$event'])
  public onDrop( event: any ) {
    this._preventStop( event );
    const transfer = this._getTransfer( event );

    if ( !transfer  ) {
      return;
    }

    this._extractFiles( transfer.files );

    this.mouseOver.emit( false );

  }

  private _getTransfer ( event: any ) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extractFiles ( fileList: FileList ) {
    for ( const properties in Object.getOwnPropertyNames( fileList ) ) {
      const temporalFile = fileList[ properties ];

      if ( this._fileCanBeLoaded( temporalFile ) ) {
        const fileItem = new FileItem( temporalFile );
        this.files.push( fileItem );
      }
    }
    console.log( this.files );
  }

  // Validations

  private _fileCanBeLoaded( file: File ): boolean {
    if ( !this._droppedFile(file.name) && this._isImage( file.type ) ) {
      return true;
    } else {
      return false;
    }
  }

  private _preventStop ( event ) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _droppedFile ( filename: string ): boolean {

    for (const file of this.files ) {
      if ( filename === file.filename ) {
        console.log( 'File Already Dropped !!' );
        return true;
      }
    }

    return false;
  }

  private _isImage ( fileType: string ): boolean {
    return ( fileType === '' || fileType === undefined ) ? false : fileType.startsWith( 'image') ;
  }
}
