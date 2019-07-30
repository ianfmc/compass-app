import { Component, OnInit } from '@angular/core';

import { FinancialComponent } from '../financial/financial.component';
import { CustomerComponent } from '../customer/customer.component';
import { MaintenanceComponent } from '../maintenance/maintenance.component'
import { ReservationsComponent } from '../reservations/reservations.component';
import { FleetComponent } from '../fleet/fleet.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
