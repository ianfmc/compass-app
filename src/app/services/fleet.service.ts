import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Fleet } from '../models/fleet';
import { FLEET } from '../models/fleet';

@Injectable({
  providedIn: 'root'
})
export class FleetService {

  constructor() { }

  getFleet(): Observable<Fleet[]> {
    return of(FLEET);
  }
}
