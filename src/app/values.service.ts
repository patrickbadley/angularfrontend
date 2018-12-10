import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'ng-config-service'
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  valuesUrl = 'values';

  getValues() {
    return this.http.get<any[]>(this.configService.get('apiUrl') + this.valuesUrl)
      .pipe(
        catchError((err, caught) => {
          console.log(err)
          return empty();
        })
      );
  }
}
