import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from 'ng-config-service';
// import { OidcSecurityService } from 'angular-auth-oidc-client';
// import { filter, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'the HMB Dev Ops Portal';
  mapEnabled = false;

  constructor(private configService: ConfigService) {
    this.mapEnabled = configService.get('mapEnabled');
  }

  ngOnInit() {
  //   return this.oidcSecurityService.getIsAuthorized().subscribe(
  //     (isAuthorized: boolean) => {
  //       this.isLoggedIn = isAuthorized;

  //       this.oidcSecurityService.getUserData().subscribe(info =>
  //         {
  //           this.userInfo = info;
  //         });
  //     })
  //   ;
  }

  ngOnDestroy(): void { }

  // login() {

  //   // if you need to add extra parameters to the login
  //   // let culture = 'de-CH';
  //   // this.oidcSecurityService.setCustomRequestParameters({ 'ui_locales': culture });

  //   this.oidcSecurityService.authorize();
  // }

  // logout() {
  //   this.oidcSecurityService.logoff();
  // }

  // private doCallbackLogicIfRequired() {
  //   if (window.location.hash) {
  //     this.oidcSecurityService.authorizedCallback();
  //   }
  // }
}
