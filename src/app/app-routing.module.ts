import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { FinancialComponent } from './components/financial/financial.component';
import { CustomerComponent } from './components/customer/customer.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { FleetComponent } from './components/fleet/fleet.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'main', component: MainComponent, children: [
    { path: '', component: FinancialComponent },
    { path: 'financial', component: FinancialComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: 'reservations', component: ReservationsComponent },
    { path: 'fleet', component: FleetComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
