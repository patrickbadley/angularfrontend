import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'ng-config-service';

@Component({
  selector: 'app-property-dashboard',
  templateUrl: './property-dashboard.component.html',
  styleUrls: ['./property-dashboard.component.sass']
})
export class PropertyDashboardComponent implements OnInit {
  mapEnabled = false;

  constructor(configService: ConfigService) {
    this.mapEnabled = configService.get('mapEnabled');
  }

  ngOnInit(): void {}
}
