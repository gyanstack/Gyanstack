import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesChildComponent } from '../service.child.component';
import { DetailsComponent } from '../services.child.detail.component';

const routes: Routes = [
    {
        path: 'create_vpn_connection/:articleId',
        component: DetailsComponent
    },
    {
        path: '',
        component: ServicesChildComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class IosRoutingModule { }