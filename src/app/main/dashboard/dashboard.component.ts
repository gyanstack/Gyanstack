import { Component, OnInit } from '@angular/core';
import { ContentService } from 'app/appServices/content.service';
import { BaseModel } from 'app/appModels/BaseModel';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contentList: BaseModel[] = [];
  isLoaded:boolean = true;
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getDashboardContents()
      .then(contents => this.loadData(contents));
  }

  loadData(model: BaseModel[]): void {
    this.isLoaded = false;
    this.contentList = model;
  }

}
