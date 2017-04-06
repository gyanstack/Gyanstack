import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
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
    private location: Location;
    public userComment: PostCommentModel;
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

            this.userComment = {
            articleId: +this.route.snapshot.params['articleId'],
            comment: '',
            userEmail: '',
            userName: ''
        }
    }

    loadData(model: ArticleModel): void {
        this.isLoaded = false;
        this.article = model;
        this.userComments = model.userComments;
        this.contentService.getContentHtml(this.article.articlePath)
            .then(html => this.article.contentHtml = html);
    }

    updateCommentList(model: PostCommentModel): void {
        let userComment = new UserCommentsModel(model.comment, model.userEmail, model.userName);
        this.userComments.push(userComment);
    }
}
