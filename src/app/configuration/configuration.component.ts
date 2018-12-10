import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'ng-config-service'

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.sass']
})
export class ConfigurationComponent implements OnInit {

  apiUrl: string;
  workflowApiUrl: string;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.apiUrl = this.configService.get('apiUrl');
  }
}
