import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatTableModule,
  MatGridListModule, MatToolbarModule, MatFormFieldModule, MatInputModule,
  MatProgressSpinnerModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValuesComponent } from './values/values.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { bootConfigServiceProvider } from 'ng-config-service';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ValuesComponent,
    ConfigurationComponent,
    PropertyListComponent
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
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    bootConfigServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
