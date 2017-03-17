import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BaseModel } from 'app/appModels/BaseModel';
import { VpnService } from 'app/appServices/Vpn.service';

@Component({
    moduleId: module.id,
    selector: 'app-ServicesChildDetails',
    templateUrl: './services.child.detail.component.html'
})
export class DetailsComponent implements OnInit {
    title: string;
    content: any;
    constructor(
        private route: ActivatedRoute,
        private vpnService: VpnService
    ) { }

    ngOnInit() {
        this.route
            .data
            .subscribe(v => this.title = v["title"]);

        this.route.params
            .switchMap((params: Params) => this.vpnService.getContentHtml())
            .subscribe(html => this.content = html);
    }
}
