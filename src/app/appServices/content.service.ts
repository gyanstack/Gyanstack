import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BaseModel } from '../appModels/BaseModel';
import { ArticleModel } from '../appModels/ArticleModel';
import { DashboardModel } from '../appModels/DashboardModel';
import { PostCommentModel } from '../appModels/PostCommentModel';

@Injectable()
export class ContentService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private baseUrl = 'http://Gyanstack.com/db/process/index.php';
    private dashboardContentUrl = 'http://Gyanstack.com/db/dashboard.php';
    private limit = "5"

    constructor(private http: Http) {
    }

    getDashboardContents(): Promise<DashboardModel[]> {
        let params = new URLSearchParams();
        params.set('limit', this.limit);
        params.set('type', 'dashboard')
        return this.http.post(this.baseUrl, params)
            .toPromise()
            .then(response => this.returnDataDashboardModel(response))
            .catch(this.handleError);
    }

    getServiceContents(method: string): Promise<BaseModel[]> {
        let params = new URLSearchParams();
        params.set('name', method);
        params.set('type', 'list')
        return this.http.post(this.baseUrl, params)
            .toPromise()
            .then(response => this.returnDataBaseModel(response))
            .catch(this.handleError);
    }

    getMostViewed(): Promise<BaseModel[]> {
        let params = new URLSearchParams();
        params.set('type', 'mostViewed');
        params.set('limit', this.limit);
        return this.http.post(this.baseUrl, params)
            .toPromise()
            .then(response => this.returnDataBaseModel(response))
            .catch(this.handleError);
    }

    getChildContentData(articleId: number): Promise<ArticleModel> {
        //const url = `${this.vpnContentDescriptionUrl}/${id}`;
        //const url = 'http://Gyanstack.com/db/New.php';
        let params = new URLSearchParams();
        params.set('type', 'detail');
        params.set('articleId', '' + articleId);
        return this.http.post(this.baseUrl, params)
            .toPromise()
            .then(response => response.json().Data as ArticleModel)
            .catch(this.handleError);
    }

    getContentHtml(path: string): Promise<any> {
        return this.http.get(path)
            .toPromise()
            .then(response => response.text())
            .catch(this.handleError);
    }

    postUserComment(postComment: PostCommentModel): Promise<PostCommentModel> {
        let params = new URLSearchParams();
        params.set('name', 'postUserComment');
        params.set('userComment', JSON.stringify(postComment));
        return this.http.post(this.baseUrl, params)
            .toPromise()
            .then(() => postComment)
            .catch(this.handleError);
    }

    private returnDataBaseModel(response: any): any {
        return response.json().Data as BaseModel[];
    }

    private returnDataDashboardModel(response: any): any {
        return response.json().Data as DashboardModel[];
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}