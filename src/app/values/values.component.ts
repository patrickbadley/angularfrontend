import { Component, OnInit } from '@angular/core';
import { interval, forkJoin, empty } from 'rxjs';
import { ValuesService } from '../values.service';
import { startWith, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.sass']
})
export class ValuesComponent implements OnInit {

  values: any[];
  displayedColumns: string[] = ['value'];
  
  constructor(private service: ValuesService) { }

  ngOnInit() {
    // Refresh list every minute
    interval(60000)
      .pipe(
        startWith(0),
        switchMap(() =>
          this.service.getValues()
        ),
        catchError((err, caught) => {
          console.log(err)
          return empty();
        })
      ).subscribe(x => {
        this.values = x;
      })
  }
}
