import { Component, OnInit } from '@angular/core';
import { ContentService } from 'app/appServices/content.service';
import { ArticleModel } from 'app/appModels/ArticleModel';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'offer-list',
    templateUrl: './offer.list.component.html',
    styleUrls: ['./offer.component.css']
})

export class OfferListComponent implements OnInit {
    listData: ArticleModel[] = [];
    title: string;
    section:string;
    isLoaded: boolean = false;
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

          this.route
          .data
          .subscribe(v => this.section = v["section"]);

        this.contentService.getOfferList(this.section)
          .subscribe(contents => this.loadData(contents));
      }
    
      loadData(model: ArticleModel[]): void {
        this.isLoaded = false;
        this.listData = model;
      }

}
