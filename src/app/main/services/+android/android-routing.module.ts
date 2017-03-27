import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesChildComponent } from '../service.child.component';
import { DetailsComponent } from '../services.child.detail.component';

const vpnRoutes: Routes = [
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

@NgModule({
    imports: [
        RouterModule.forChild(vpnRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AndroidRoutingModule { }