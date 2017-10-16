import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

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
  isLoaded: boolean = true;
  constructor(
    private contentService: ContentService,
    private titleService: Title,
    private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Gyanstack - Technology Blog and a complete solution");
    this.metaService.updateTag({
      content: 'Gyanstack - Technology Blog and a complete solution'
    },
      "property='og:title'"
    );

    this.metaService.updateTag({
      content: 'One among the best technology solution for Windows, Mac, internet, ios, android, antivirus and many more...'
    },
      "property='og:description'"
    );

    this.metaService.updateTag({
      content: window.location.href
    },
      "property='og:url'"
    );

    this.contentService.getDashboardContents()
      .subscribe(contents => this.loadData(contents));
  }

  loadData(model: ArticleModel[]): void {
    this.isLoaded = false;
    this.articleList = model;
  }
}
