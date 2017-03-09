import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VpnComponent } from './vpn.component';

const vpnRoutes: Routes = [
    {
        path: '',
        component: VpnComponent,
        children: [
            {
                path: 'create_vpn_connection/:id',
                component: VpnComponent
            },
            {
                path: 'vpn_not_working/:id',
                component: VpnComponent
            },
            {
                path: 'troubleshoot_vpn_connection/:id',
                component: VpnComponent
            }
        ]
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