import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VpnComponent } from './vpn.component';
import { DetailsComponent } from './details.component';

const vpnRoutes: Routes = [
    {
        path: 'create_vpn_connection/:id',
        component: DetailsComponent
    },
    {
        path: 'vpn_not_working/:id',
        component: DetailsComponent
    },
    {
        path: 'troubleshoot_vpn_connection/:id',
        component: DetailsComponent
    },
    {
        path: '',
        component: VpnComponent
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

export class VpnRoutingModule { }