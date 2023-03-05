import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../services/dashboard-service.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  constructor(
    private dashboardService: DashboardServiceService
  ) { }

  ngOnInit() {
    this.dashboardService.getConfig().subscribe(data => {
      console.log(data);
    });
  }
}
