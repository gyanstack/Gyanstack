import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, URLSearchParams } from '@angular/http';
import { DetailsComponent } from '../main/services/services.child.detail.component';
import { ServicesChildComponent } from '../main/services/service.child.component';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class RouteService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private baseUrl = 'http://Gyanstack.com/db/process/index.php';

    constructor(private http: Http) {
    }

    getRoutes(): Array<Object> {
        return [
            {
                path: 'how_to_go_live_on_facebook/:articleId',
                component: DetailsComponent
            },
            {
                path: 'Wifi_hotspot_share_your_android_device_internet_connection_with_others/:articleId',
                component: DetailsComponent
            },
            {
                path: '',
                component: ServicesChildComponent
            }
        ];
    }
}