import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ArticleModel } from 'app/appModels/ArticleModel';
import { ContentService } from 'app/appServices/content.service';

@Component({
  moduleId: module.id,
  selector: 'app-serviceChild',
  templateUrl: './services.child.component.html'
})
export class ServicesChildComponent implements OnInit {
  title: string;
  isLoaded: boolean = false;
  articleList: ArticleModel[] = [];
  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private router: Router
  ) {
    this.isLoaded = true;
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(v => this.title = v["title"]);

    this.contentService.getServiceContents(this.title)
      .subscribe(contents => this.loadData(contents));
  }

  loadData(model: ArticleModel[]): void {
    this.isLoaded = false;
    this.articleList = model;
  }
}