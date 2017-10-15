import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesChildComponent } from '../service.child.component';
import { DetailsComponent } from '../services.child.detail.component';

const routes: Routes = [
    {
        path: 'how_to_check_internet_speed/:articleId',
        component: DetailsComponent,
        data:{
            title:'How to check the internet speed', 
            metaDescription:'Every internet user wanted to know how fast their internet is working & what internet speed they are getting form their Internet service provider. Before conducting your internet bandwidth test I would like to suggest'
        }
    },
    {
        path: 'shortcut_to_open_a_website_link_in_new_tab_new_window_using_Keyboard/:articleId',
        component: DetailsComponent,
        data:{
            title:'Shortcut to open a website link in new tab/New window using Keyboard', 
            metaDescription:'If you are a keyboard lover or in a situation where you cant use mouse but wanted to surf Internet with multiple tab opening or multiple window opening of same browser. Here is the complete guide.'
        }
    },
    {
        path: 'how_to_block_inappropriate_content_videos_in_youtube/:articleId',
        component: DetailsComponent,
        data:{
            title:'How to block inappropriate content videos in YouTube', 
            metaDescription:'If you are a parent and your kids spending lot of time on YouTube, it is an obvious concern that your kids are watching appropriate stuff on YouTube'
        }
    },
    {
        path: 'how_to_use_private_browsing_and_its_advantages/:articleId',
        component: DetailsComponent,
        data:{
            title:'How to use private browsing & its advantages', 
            metaDescription:'Today almost all web browser have the facility of Private web browsing mode. It is worth to use private browsing mode when you dont want others to see/save your web surfing history. What private browsing can do'
        }
    },
    {
        path: 'top_download_managers_for_your_machine/:articleId',
        component: DetailsComponent,
        data:{
            title:'Top download managers for your machine ', 
            metaDescription:'Ever felt the pain of your good-old web browser not being able to get your download done easily. This was quite a routine experience for old days of internet when users struggled to get small files downloaded in days'
        }
    },
    {
        path: 'best_web_browser_to_look_out_for/:articleId',
        component: DetailsComponent,
        data:{
            title:'Top web browser to look out for', 
            metaDescription:'We browsers have been the core of internet since its inception. We may now have different apps to serve different needs but web browsers still act as the central canvas where all the web apps'
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

export class InternetRoutingModule { }