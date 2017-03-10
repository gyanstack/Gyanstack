import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BaseModel } from '../appModels/BaseModel';

@Injectable()
export class VpnService{
    private headers = new Headers({'Content-Type': 'application/json'});
    private vpnContentUrl = 'api/vpnContentList';
    private vpnContentDescriptionUrl = 'api/vpnContentCompleteDescription';

    constructor(private http:Http){}

    getVpnContents():Promise<BaseModel[]>{
        return this.http.get(this.vpnContentUrl)
        .toPromise()
        .then(response=>response.json().data as BaseModel[])
        .catch(this.handleError);
    }

    getVpnContentFullDescription(id: number): Promise<BaseModel> {
    const url = `${this.vpnContentDescriptionUrl}/${id}`;
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