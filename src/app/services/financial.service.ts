import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Financial } from '../models/financial';
import { FINANCIALS } from '../models/financial';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {

  constructor() { }

  getFinancials(): Observable<Financial[]> {
    return of(FINANCIALS);
  }
}
