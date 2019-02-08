import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'ng-config-service';
import { catchError } from 'rxjs/operators';
import { empty, Observable } from 'rxjs';
import { ILatLong } from 'angular-maps';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  propertyUrl = 'property';
  propertyMapUrl = 'property/formap';

  getList(skip, top, sortProperty, sortDirection) {

    return this.http.post<Property.PagedResponse>(this.configService.get('apiUrl') + this.propertyUrl,
      {
        skip: skip,
        top: top,
        sortParameters: [
          {
            propertyName: sortProperty,
            sortDirection: sortDirection === 'asc' ? 0 : 1
          }
        ]
      })
      .pipe(
        catchError((err, caught) => {
          console.log(err);
          return empty();
        })
      );
  }

  getListForMap(latitude, longitude, radius) {

    return this.http.post<Property.Response>(this.configService.get('apiUrl') + this.propertyMapUrl,
      {
        latitude: latitude,
        longitude: longitude,
        radius: radius
      })
      .pipe(
        catchError((err, caught) => {
          console.log(err);
          return empty();
        })
      );
  }
}

export module Property {
  export interface ListItem extends ILatLong {
    propertyId: number;
    ownerName: string;
    realtorName: string;
    address: string;
    city: boolean;
    state: string;
    zipCode: boolean;
    numVisits: number;
    latitude: number;
    longitude: number;
  }
  export interface PagedResponse {
    data: ListItem[];
    total: number;
  }

  export interface Response {
    data: ListItem[];
  }

}
