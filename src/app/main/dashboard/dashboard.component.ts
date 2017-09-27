import { Component, OnInit } from '@angular/core';
import { ContentService } from 'app/appServices/content.service';
import { ArticleModel } from 'app/appModels/ArticleModel';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articleList: ArticleModel[] = [];
  isLoaded:boolean = true;
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getDashboardContents()
      .then(contents => this.loadData(contents));
  }

  loadData(model: ArticleModel[]): void {
    debugger;
    this.isLoaded = false;
    this.articleList = model;
  }

}
