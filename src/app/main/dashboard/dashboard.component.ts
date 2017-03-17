import { Component, OnInit } from '@angular/core';
import { VpnService } from 'app/appServices/Vpn.service';
import { DashboardModel } from 'app/appModels/DashboardModel';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contentList: DashboardModel[] = [];
  isLoaded:boolean = true;
  constructor(private vpnService: VpnService) { }

  ngOnInit() {
    this.vpnService.getDashboardContents()
      .then(vpnContents => this.loadData(vpnContents));
  }

  loadData(model: DashboardModel[]): void {
    this.isLoaded = false;
    this.contentList = model;
  }

}
