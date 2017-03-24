import { Component, OnInit } from '@angular/core';
import { ContentService } from 'app/appServices/content.service';
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
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getDashboardContents()
      .then(vpnContents => this.loadData(vpnContents));
  }

  loadData(model: DashboardModel[]): void {
    this.isLoaded = false;
    this.contentList = model;
  }

}
