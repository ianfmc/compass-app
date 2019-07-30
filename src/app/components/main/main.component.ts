import { Component, OnInit } from '@angular/core';

import { FinancialComponent } from '../financial/financial.component';
import { CustomerComponent } from '../customer/customer.component';

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
