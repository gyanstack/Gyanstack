import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleModel } from 'app/appModels/ArticleModel';
import { UserCommentsModel } from 'app/appModels/UserCommentsModel';
import { PostCommentModel } from 'app/appModels/PostCommentModel';
import { ContentService } from 'app/appServices/content.service';
import { CeiboShare } from 'ng2-social-share';

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
    repoUrl: string;
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
        let articleId: number;
        let articlePath: string;
        this.route.url.subscribe(params =>
            articleId = +params[1].path
        )

        this.route.url
            .switchMap((params: Params) => this.contentService.getChildContentData(articleId))
            .subscribe(data => this.loadData(data));

        this.userComment = {
            articleId: articleId,
            comment: '',
            userEmail: '',
            userName: ''
        }

        this.repoUrl = window.location.href;
    }

    loadData(model: ArticleModel): void {
        this.isLoaded = false;
        this.article = model;
        this.userComments = model.userComments;
        this.contentService.getContentHtml(this.article.path)
            .then(html => this.article.contentHtml = html);
    }

    updateCommentList(model: PostCommentModel): void {
        let userComment = new UserCommentsModel(model.comment, model.userEmail, model.userName);
        this.userComments.push(userComment);
    }

    updateLike(id:number, action:string){
        if(action == "up"){
            this.article.likeCount++;
        }
        if(action == "down"){
            this.article.dislikeCount++;
        }

        this.contentService.updateLike(id, action);
    }
}