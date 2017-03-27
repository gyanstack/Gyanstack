import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { ArticleModel } from 'app/appModels/ArticleModel';
import { UserCommentsModel } from 'app/appModels/UserCommentsModel';
import { PostCommentModel } from 'app/appModels/PostCommentModel';
import { ContentService } from 'app/appServices/content.service';

@Component({
    moduleId: module.id,
    selector: 'app-ServicesChildDetails',
    templateUrl: './services.child.detail.component.html'
})
export class DetailsComponent implements OnInit {
    title: string;
    isLoaded: boolean = false;
    article: ArticleModel;
    userComments: UserCommentsModel[];
    postComment:PostCommentModel;
    private location: Location;
    constructor(
        private route: ActivatedRoute,
        private contentService: ContentService
    ) { 
        
    }

    ngOnInit() {
        this.route
            .data
            .subscribe(v => this.title = v["title"]);

        this.route.params
            .switchMap((params: Params) => this.contentService.getChildContentData(+params['articleId']))
            .subscribe(data => this.loadData(data));
    }

    loadData(model: ArticleModel): void {
        this.isLoaded = false;
        this.article = model;
        this.userComments = model.userComments;

        this.contentService.getContentHtml(this.article.articlePath)
            .then(html => this.article.contentHtml = html);
    }

    save(): void {
        this.contentService.postUserComment(this.postComment)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
