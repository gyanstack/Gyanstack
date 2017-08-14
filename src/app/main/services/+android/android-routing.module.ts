import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesChildComponent } from '../service.child.component';
import { DetailsComponent } from '../services.child.detail.component';

const routes: Routes = [
    {
        path: 'how_to_go_live_on_facebook/:articleId',
        component: DetailsComponent
    },
    {
        path: 'Wifi_hotspot_share_your_android_device_internet_connection_with_others/:articleId',
        component: DetailsComponent
    },
    {
        path: 'Tips_to_boost_your_Android_speed/:articleId',
        component: DetailsComponent
    },
    // {
    //     path: 'Google_Play_Store_Error_retrieving_information_from_server_Easy_Fix/:articleId',
    //     component: DetailsComponent
    // },
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

export class AndroidRoutingModule { }