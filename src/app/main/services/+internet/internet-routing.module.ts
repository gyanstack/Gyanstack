import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesChildComponent } from '../service.child.component';
import { DetailsComponent } from '../services.child.detail.component';

const routes: Routes = [
    {
        path: 'how_to_check_internet_speed/:articleId',
        component: DetailsComponent
    },
    {
        path: 'shortcut_to_open_a_website_link_in_new_tab_new_window_using_Keyboard/:articleId',
        component: DetailsComponent
    },
    {
        path: 'how_to_block_inappropriate_content_videos_in_youtube/:articleId',
        component: DetailsComponent
    },
    {
        path: 'how_to_use_private_browsing_and_its_advantages/:articleId',
        component: DetailsComponent
    },
    {
        path: 'top_download_managers_for_your_machine/:articleId',
        component: DetailsComponent
    },
    {
        path: 'best_web_browser_to_look_out_for/:articleId',
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

export class InternetRoutingModule { }