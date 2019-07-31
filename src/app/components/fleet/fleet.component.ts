import { Component, OnInit } from '@angular/core';
import { FleetService } from '../../services/fleet.service';
import { Fleet } from '../../models/fleet';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {
  boats: Fleet[];

  constructor(private fleetService: FleetService) { }

  ngOnInit() {
    this.getFleet();
  }

  getFleet(): void {
    this.fleetService.getFleet()
      .subscribe(fleet => this.boats = fleet);
  }
}
