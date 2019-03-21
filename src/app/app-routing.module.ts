import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyDashboardComponent } from './property-dashboard/property-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyDashboardComponent
  },
  {
    path: 'property-details/:id',
    component: PropertyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
