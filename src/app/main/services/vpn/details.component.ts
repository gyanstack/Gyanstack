import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BaseModel } from 'app/appModels/BaseModel';
import { VpnService } from 'app/appServices/Vpn.service';

@Component({
    moduleId: module.id,
    selector: 'app-vpnDetails',
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
    title: string;
    vpnContent: BaseModel;
    constructor(
        private route: ActivatedRoute,
        private vpnService: VpnService
    ) { }

    ngOnInit() {
        this.route
            .data
            .subscribe(v => this.title = v["title"]);

        this.route.params
            .switchMap((params: Params) => this.vpnService.getVpnContentFullDescription(+params['id']))
            .subscribe(vpnContent => this.vpnContent = vpnContent);
    }
}
