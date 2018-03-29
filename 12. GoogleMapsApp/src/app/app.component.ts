import { Component } from '@angular/core';
import { MapsService } from './services/maps.service';
import {Marker} from './interfaces/marker.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number = 4.606082;
  lng: number = -74.055686;
  zoom: number = 16;

  public selMarker: any;

  constructor(
    public _mapsService: MapsService
  ) {
    this._mapsService.loadMarkers();
    console.log( _mapsService.markers );
  }

  public mapClick( e ) {
    let marker: Marker = {
      lat: e.coords.lat,
      lng: e.coords.lng,
      title: 'NA',
      draggable: true
    };

    this._mapsService.addMarker( marker );
  }

  public markerClick( marker: Marker, i: number ): void {
    this.selMarker = marker ;
  }

  public dragEndMarker( marker: Marker, e ) {
    marker.lat = e.coords.lat;
    marker.lng = e.coords.lng;

    this._mapsService.saveMarkers();
  }
}
