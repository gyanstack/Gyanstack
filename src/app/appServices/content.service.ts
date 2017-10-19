import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, URLSearchParams, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ArticleModel } from '../appModels/ArticleModel';
import { DashboardModel } from '../appModels/DashboardModel';
import { PostCommentModel } from '../appModels/PostCommentModel';

@Injectable()
export class ContentService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    //private baseUrl = 'http://localhost:55428/api/';
    private baseUrl = 'http://admin.Gyanstack.com/api/';
    //private dashboardContentUrl = 'http://Gyanstack.com/db/dashboard.php';
    private limit = "5"
    private dashboardList = new BehaviorSubject<any>(new Array<DashboardModel>());
    private mostViewedList = new BehaviorSubject<any>(new Array<ArticleModel>());
    constructor(private http: Http) {
    }

    getDashboardContents(): Observable<DashboardModel[]> {
        if (this.dashboardList.value.length == 0) {
            let requestOptions = new RequestOptions();
            let params = new URLSearchParams();
            params.set('count', '10');
            requestOptions.search = params;
            return this.http.get(this.baseUrl + "DashboardApi/GetDashboard/10")
                .map(response => this.returnDataDashboardModel(response, "dashboard"))
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }

        return this.dashboardList.asObservable();
    }

    getMostViewed(): Observable<ArticleModel[]> {
        if (this.mostViewedList.value.length != 0) {
            return this.mostViewedList.asObservable();
        }

        let requestOptions = new RequestOptions();
        let params = new URLSearchParams();
        params.set('count', '10');
        requestOptions.search = params;
        return this.http.get(this.baseUrl + "DashboardApi/GetMostViewed/10")
            .map(response => this.returnDataBaseModel(response))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getServiceContents(method: string): Observable<ArticleModel[]> {
        let requestOptions = new RequestOptions();
        let params = new URLSearchParams();
        params.set('name', method);
        requestOptions.search = params;
        return this.http.get(this.baseUrl + "DashboardApi/GetList/" + method)
            .map(response => this.returnDataBaseModel(response))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getChildContentData(articleId: number): Observable<ArticleModel> {
        let requestOptions = new RequestOptions();
        let params = new URLSearchParams();
        params.set('id', '' + articleId);
        requestOptions.search = params;

        return this.http.get(this.baseUrl + "ArticleApi/GetDetail/" + articleId)
            .map(response => this.returnArticleModel(response))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getContentHtml(path: string): Promise<any> {
        return this.http.get(path)
            .toPromise()
            .then(response => response.text())
            .catch(this.handleError);
    }

    postUserComment(postComment: PostCommentModel): Promise<PostCommentModel> {
        let params = new URLSearchParams();
        params.set('articleId', postComment.articleId + '');
        params.set('comment', postComment.comment);
        params.set('userName', postComment.userName);
        params.set('userEmail', postComment.userEmail);
        return this.http.post(this.baseUrl + "ArticleApi/PostComment/", params)
            .toPromise()
            .then(() => postComment)
            .catch(this.handleError);
    }

    updateLike(id: number, action: string): void {
        let params = new URLSearchParams();
        params.set('articleId', id + '');
        params.set('action', action);
        this.http.post(this.baseUrl + "ArticleApi/UpdateLike", params);
    }

    private returnArticleModel(response: any): any {
        let result = response.json() as ArticleModel;
        return result;
    }

    private returnDataBaseModel(response: any): any {
        let result = response.json() as ArticleModel[];
        return result;
    }

    private returnDataDashboardModel(response: any, type: string): any {
        let result = response.json() as DashboardModel[];
        this.dashboardList.next(result);
        return result;

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in the application', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}