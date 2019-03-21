import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatTableModule,
  MatGridListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import {
  MapModule,
  MapAPILoader,
  WindowRef,
  DocumentRef,
  BingMapAPILoaderConfig,
  BingMapAPILoader
} from 'angular-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValuesComponent } from './values/values.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { bootConfigServiceProvider } from 'ng-config-service';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyMapComponent } from './property-map/property-map.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyDashboardComponent } from './property-dashboard/property-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ValuesComponent,
    ConfigurationComponent,
    PropertyListComponent,
    PropertyMapComponent,
    PropertyDetailsComponent,
    PropertyDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MapModule.forRootBing()
  ],
  providers: [
    bootConfigServiceProvider,
    {
      provide: MapAPILoader,
      deps: [],
      useFactory: BingMapServiceProviderFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function BingMapServiceProviderFactory() {
  const bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey =
    'AoedsyA7i0KIJSKeKp5Pz01yNGsraSKnY2i6pZq54pwwfANBUrZIqmZEXZsjxEQ6';
  // replace with your bing map key
  // the usage of this key outside this plunker is illegal.
  bc.branch = 'experimental';
  // to use the experimental bing brach. There are some bug fixes for
  // clustering in that branch you will need if you want to use
  // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}
