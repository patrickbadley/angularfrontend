import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from 'ng-config-service';
// import { OidcSecurityService } from 'angular-auth-oidc-client';
// import { filter, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'DevelOP Your K8s Demo';
}
