import { Injectable } from '@angular/core';
import { Marker } from '../interfaces/marker.interface';

@Injectable()
export class MapsService {
  public markers: Marker[] = [];

  constructor() { }

  public addMarker( marker: Marker ): void {
    this.markers.push( marker );
    this.saveMarkers();
  }

  public deleteMarker (i: number): void {
    this.markers.splice(i, 1);
    this.saveMarkers();
  }

  public saveMarkers(): void {
    localStorage.setItem('markers', JSON.stringify( this.markers ) );
  }

  public loadMarkers(): void {
    if ( localStorage.getItem('markers')) {
      this.markers = JSON.parse( localStorage.getItem('markers') );
    } else {
      this.markers = [];
    }
  }


}
