import { Component, OnInit } from '@angular/core';
import { ContentService } from 'app/appServices/content.service';
import { ArticleModel } from 'app/appModels/ArticleModel';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";
import {SharedModule} from 'app/main/services/shared.module'
import { CeiboShare } from 'ng2-social-share';

@Component({
    moduleId: module.id,
    selector: 'app-offer-detail',
    templateUrl: './offer.detail.component.html',
    styleUrls: ['./offer.component.css']
})

export class OfferDetailComponent implements OnInit {
    title: string;
    description: string;
    isLoaded: boolean = false;
    article: ArticleModel;
    repoUrl: string;
    articleId:number;
    contentUrl;
    constructor(
        private route: ActivatedRoute,
        private contentService: ContentService,
        private router: Router,
        private domSanitizer : DomSanitizer
    ) { }

    ngOnInit() {
        this.route.url.subscribe(params => { 
          this.articleId =  +params[params.length-1].path; 
        })

        this.contentService.getChildContentData(this.articleId)
        .subscribe(data => this.loadData(data));
    }

    loadData(model: ArticleModel): void {
        this.isLoaded = false;
        this.article = model;
        this.contentUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.article.path);
        this.repoUrl = window.location.href;
    }
}