import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesChildComponent } from '../service.child.component';
import { DetailsComponent } from '../services.child.detail.component';

const routes: Routes = [
    {
        path: 'how_to_use_an_ADSL_router_as_a_hub_for_networking_purpose/:articleId',
        component: DetailsComponent,
        data:{
            title:'How to use an ADSL router as a HUB for networking purpose?', 
            metaDescription:'Before going into the step by step process to convert an ADSL modem to HUB/Switch, let we learn where these devices works. ADSL Modem: It is a device normally'
        }
    },
    {
        path: 'how_to_decide_exact_MTU_size_for_router/:articleId',
        component: DetailsComponent,
        data:{
            title:'How to decide exact MTU size for router?', 
            metaDescription:'MTU (Maximum transmission unit) in terms of networking means the size of a packet that a network can carry. Maximum MTU size value in networking router is 1500 and minimum can be set to...'
        }
    },
    {
        path: 'virtual_private_network/:articleId',
        component: DetailsComponent,
        data:{
            title:'Virtual Private Network...', 
            metaDescription:'Internet is the world of unlimited scopes with thousands of threat including stealing of your data, changing your information, your personnel ID, bank details and finally your...'
        }
    },
    {
        path: 'default_user_name_password_for_different_ADSL_Ethernet_wifi_routers/:articleId',
        component: DetailsComponent,
        data:{
            title:'Default user name and password for different ADSL/Ethernet/Wi-Fi routers...', 
            metaDescription:'To configure ADSL modem or to set Wi-Fi Access point name and password it is necessary to login into the Modem/Router. To login into the router follow the steps (i)	First of all power on your ADSL modem, Wi-Fi router and...'
        }
    },
    {
        path: '',
        component: ServicesChildComponent
    },
    { 
        path: '**', 
        component: DetailsComponent 
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