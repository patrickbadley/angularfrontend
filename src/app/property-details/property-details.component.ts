import { Component, AfterViewInit } from '@angular/core';
import { PropertyService, Property } from '../property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.sass']
})
export class PropertyDetailsComponent implements AfterViewInit {
  displayedColumns: string[] = ['date'];

  item: Property.Item;

  constructor(
    private service: PropertyService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    const propertyId = this.route.snapshot.params['id'];
    return this.service.getDetails(propertyId).subscribe(results => {
      this.item = results;
    });
  }
}
