import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'ng-config-service';
import { catchError } from 'rxjs/operators';
import { empty, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  propertyUrl = 'property';

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
}

export module Property {
  export interface ListItem {
    propertyId: number;
    ownerName: string;
    realtorName: string;
    address: string;
    city: boolean;
    state: string;
    zipCode: boolean;
    numVisits: number;
  }
  export interface PagedResponse {
    data: ListItem[];
    total: number;
  }
}
