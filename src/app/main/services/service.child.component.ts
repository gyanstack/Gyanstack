import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseModel } from 'app/appModels/BaseModel';
import { ContentService } from 'app/appServices/content.service';

@Component({
  moduleId: module.id,
  selector: 'app-serviceChild',
  templateUrl: './services.child.component.html'
})
export class ServicesChildComponent implements OnInit {
  title: string;
  isLoaded: boolean = false;
  contentList: BaseModel[] = [];
  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) { 
    this.isLoaded = true;
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(v => this.title = v["title"]);

    this.contentService.getServiceContents(this.title)
      .then(contents => this.loadData(contents));
  }

  loadData(model: BaseModel[]): void {
    this.isLoaded = false;
    this.contentList = model;
  }

}