import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackupComponent } from './backup.component';
import { DetailsComponent } from './details.component';

const vpnRoutes: Routes = [
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
        component: BackupComponent
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

export class BackupRoutingModule { }