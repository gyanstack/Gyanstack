import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BaseModel } from '../appModels/BaseModel';
import { DashboardModel } from '../appModels/DashboardModel';

@Injectable()
export class VpnService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private vpnContentUrl = 'http://Gyanstack.com/db/vpn.php';
    private dashboardContentUrl = 'http://Gyanstack.com/db/dashboard.php';
    private vpnContentDescriptionUrl = 'GetVpnContentCompleteDescription';
    private cloudContentDescriptionUrl = 'GetCloudContentCompleteDescription';

    constructor(private http: Http) {
    }

    getDashboardContents(): Promise<DashboardModel[]> {
        return this.http.get(this.dashboardContentUrl)
            .toPromise()
            .then(response => response.json() as DashboardModel[])
            .catch(this.handleError);
    }

    getServiceContents(): Promise<BaseModel[]> {
        return this.http.get(this.vpnContentUrl)
            .toPromise()
            .then(response => response.json() as BaseModel[])
            .catch(this.handleError);
    }

    getVpnContentFullDescription(id: number): Promise<BaseModel> {
        //const url = `${this.vpnContentDescriptionUrl}/${id}`;
        const url = 'http://Gyanstack.com/db/New.php';
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as BaseModel)
            .catch(this.handleError);
    }

    getContentHtml(): Promise<any> {
        //const url = `${this.vpnContentDescriptionUrl}/${id}`;
        const url = 'http://db.gyanstack.com/test.html';
        return this.http.get(url)
            .toPromise()
            .then(response => response.text())
            .catch(this.handleError);
    }

    getCloudContents(): Promise<BaseModel[]> {
        return this.http.get(this.vpnContentUrl)
            .toPromise()
            .then(response => response.json() as BaseModel[])
            .catch(this.handleError);
    }

    getCloudContentFullDescription(id: number): Promise<BaseModel> {
        const url = `${this.cloudContentDescriptionUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as BaseModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}