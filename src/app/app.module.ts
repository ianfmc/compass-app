import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { FinancialComponent } from './components/financial/financial.component';
import { CustomerComponent } from './components/customer/customer.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuComponent } from './components/menu/menu.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    FinancialComponent,
    CustomerComponent,
    MaintenanceComponent,
    ReservationsComponent,
    FleetComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
