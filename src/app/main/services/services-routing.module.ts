import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesComponent } from './services.component';

const servicesRoutes: Routes = [
    {
        path: '',
        component: ServicesComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: 'vpn',
                        loadChildren: 'app/main/services/vpn/vpn.module#VpnModule',
                         data: { title: 'Vpn services' }
                    },
                    {
                        path: 'cloud',
                        component: ServicesComponent,
                         data: { title: 'Cloud services' }
                        //loadChildren: 'app/main/services/cloud/cloud.module#CloudModule'
                    },
                    {
                        path: 'backup',
                        component: ServicesComponent,
                         data: { title: 'Backup serices' }
                        //loadChildren: 'app/main/services/backup/backup.module#BackupModule'
                    },
                    {
                        path: 'antivirus',
                        component: ServicesComponent,
                         data: { title: 'Antivirus services' }
                        //loadChildren: 'app/main/services/antivirus/antivirus.module#AntivirusModule'
                    },
                    {
                        path: '',
                        component: ServicesComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(servicesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ServicesRoutingModule { }