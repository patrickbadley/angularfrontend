import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PropertyService, Property } from '../property.service';
import { interval, empty, merge, Observable, of } from 'rxjs';
import { startWith, switchMap, catchError, map } from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.sass']
})
export class PropertyListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'address',
    'city',
    'state',
    'zipCode',
    'realtorName',
    'ownerName',
    'numVisits',
    'details'
  ];
  dataSource = new MatTableDataSource();
  resultsLength = 0;
  isLoadingResults = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: PropertyService) {}

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.paginator.page, this.sort.sortChange)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.service.getList(
            this.paginator.pageIndex * this.paginator.pageSize,
            this.paginator.pageSize,
            this.sort.active,
            this.sort.direction
          );
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.resultsLength = data.total;

          return data.data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return of([]);
        })
      )
      .subscribe(data => (this.dataSource.data = data));
  }
}
