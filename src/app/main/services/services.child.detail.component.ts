import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router, NavigationEnd, Routes } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

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
    description: string;
    isLoaded: boolean = false;
    article: ArticleModel;
    userComments: UserCommentsModel[];
    repoUrl: string;
    private location: Location;
    public userComment: PostCommentModel;
    constructor(
        private route: ActivatedRoute,
        private contentService: ContentService,
        private router: Router,
        private titleService: Title,
        private metaService: Meta
    ) {
    }

    ngOnInit() {
        this.route
            .data
            .subscribe(v => {
                this.titleService.setTitle(v["title"]);
                this.metaService.updateTag({
                    content: v["title"]
                },
                    "property='og:title'"
                );

                this.metaService.updateTag({
                    content: v["metaDescription"]
                },
                    "property='og:description'"
                );
            });

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

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });

        // this.router.events
        //     .filter(event => event instanceof NavigationEnd)
        //     .map(() => this.route)
        //     .map(route => {
        //         while (route.firstChild) route = route.firstChild;
        //         return route;
        //     })
        //     .filter(route => route.outlet === 'primary')
        //     //Data fields are merged so we can use them directly to take title and metaDescription for each route from them
        //     .mergeMap(route => route.data)
        //     //Real action starts there
        //     .subscribe((event) => {
        //         //Changing title
        //         debugger
        //         this.titleService.setTitle(event['title']);

        //         var titleTag = { property: 'title', content: event['title'] };
        //         var ogtitleTag = { property: 'og:title', content: event['title'] };
        //         var ogdescriptionTag = { property: 'og:description', content: event['metaDescription'] };
        //         var descriptionTag = { property: 'description', content: event['metaDescription'] };
        //         var imageTag = { property: 'og:image', content: event['image'] };

        //         let titleAttributeSelector: string = 'property="title"';
        //         let ogtitleAttributeSelector: string = 'property="og:title"';
        //         let descriptionAttributeSelector: string = 'property="description"';
        //         let ogdescriptionAttributeSelector: string = 'property="og:description"';
        //         let imageAttributeSelector: string = 'property="og:image"';

        //         this.metaService.removeTag(titleAttributeSelector);
        //         this.metaService.removeTag(ogtitleAttributeSelector);
        //         this.metaService.removeTag(ogdescriptionAttributeSelector);
        //         this.metaService.removeTag(descriptionAttributeSelector);
        //         this.metaService.removeTag(imageAttributeSelector);

        //         this.metaService.addTag(descriptionTag, true);
        //         this.metaService.addTag(ogdescriptionTag, true);
        //         this.metaService.addTag(titleTag, true);
        //         this.metaService.addTag(ogtitleTag, true);
        //         this.metaService.addTag(imageTag, true);
        //     });
    }

    loadData(model: ArticleModel): void {
        this.isLoaded = false;
        this.article = model;
        this.userComments = model.userComments;
        this.contentService.getContentHtml(this.article.path)
            .then(html => this.article.contentHtml = html);
        this.repoUrl = window.location.href;
    }

    updateCommentList(model: PostCommentModel): void {
        let userComment = new UserCommentsModel(model.comment, model.userEmail, model.userName);
        this.userComments.push(userComment);
    }

    updateLike(id: number, action: string) {
        if (action == "up") {
            this.article.likeCount++;
        }
        if (action == "down") {
            this.article.dislikeCount++;
        }

        this.contentService.updateLike(id, action);
    }
}