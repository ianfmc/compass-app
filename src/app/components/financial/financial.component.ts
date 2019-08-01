import { Component, OnInit } from '@angular/core';

import { FinancialService } from '../../services/financial.service';
import { Financial } from 'src/app/models/financial';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {
  revenues: Financial[];

  constructor(private financialService: FinancialService) {
   }

  ngOnInit() {
    this.getFinancials();
  }

  getFinancials(): void {
    this.financialService.getFinancials()
      .subscribe(financials => this.revenues = financials);
  }
}
