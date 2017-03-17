import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesChildComponent } from '../service.child.component';
import { DetailsComponent } from '../services.child.detail.component';

const vpnRoutes: Routes = [
    {
        path: 'create_vpn_connection/:id',
        component: DetailsComponent
    },
    {
        path: 'create_cloud/:id',
        component: DetailsComponent
    },
    {
        path: 'how_to_resolve_this_in_cloud/:id',
        component: DetailsComponent
    },
    {
        path: 'troubleshoot_vpn_connection/:id',
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

export class AntivirusRoutingModule { }