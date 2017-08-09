import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesChildComponent } from '../service.child.component';
import { DetailsComponent } from '../services.child.detail.component';

const routes: Routes = [
    {
        path: 'how_to_use_an_ADSL_router_as_a_hub_for_networking_purpose/:articleId',
        component: DetailsComponent
    },
    {
        path: 'how_to_decide_exact_MTU_size_for_router/:articleId',
        component: DetailsComponent
    },
    {
        path: 'virtual_private_network/:articleId',
        component: DetailsComponent
    },
    {
        path: 'default_user_name_password_for_different_ADSL_Ethernet_wifi_routers/:articleId',
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

export class NetworkingRoutingModule { }