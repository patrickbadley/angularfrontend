import { Component, AfterViewInit } from '@angular/core';
import {MarkerTypeId, IMapOptions, IBox} from 'angular-maps';
import { PropertyService, Property } from '../property.service';

@Component({
  selector: 'app-property-map',
  templateUrl: './property-map.component.html',
  styleUrls: ['./property-map.component.sass']
})
export class PropertyMapComponent implements AfterViewInit {

  mapEnabled = false;
  _markerTypeId = MarkerTypeId;
  _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1,
    zoom: 7,
    mapTypeId: 6
  };

  _box: IBox = {
    maxLatitude: 40.2,
    maxLongitude: -82.7,
    minLatitude: 39.8,
    minLongitude: -83.2
  };

  _ranges: Map<number, string> = new Map<number, string>([
    [25, 'rgba(20, 180, 20, 0.5)'],
    [50, 'rgba(255, 210, 40, 0.5)'],
    [Number.MAX_SAFE_INTEGER , 'rgba(255, 40, 40, 0.5)']
  ]);

  _markers: Array<Property.ListItem> = new Array<Property.ListItem>();

  constructor (private service: PropertyService) { }

  ngAfterViewInit() {

    this.service.getListForMap((this._box.minLatitude + this._box.maxLatitude) / 2,
                              (this._box.minLongitude + this._box.maxLongitude) / 2,
                              (this._box.maxLongitude - this._box.minLongitude) / 2)
      .subscribe(propertyResponse => {
        for (const property of propertyResponse.data) {
          this._markers.push(property);
        }
      });
  }
  _click(index: number) {
     console.log(`Marker ${index} says: hello world...`);
  }
}
