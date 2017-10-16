import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ServicesChildComponent } from '../service.child.component';
import { DetailsComponent } from '../services.child.detail.component';

const routes: Routes = [
    {
        path: 'how_to_go_live_on_facebook/:articleId',
        component: DetailsComponent,
        data:{
            title:'how to go live on facebook', 
            metaDescription:'Facebook has become one of the primary platform for people to share their feelings, emotions, view and connect with friends, it has always been about socializing. As a part of their continuous zeal to promote sharing Facebook acquired few buzzing firms like Instagram and WhatsApp...'
        }
    },
    {
        path: 'Wifi_hotspot_share_your_android_device_internet_connection_with_others/:articleId',
        component: DetailsComponent,
        data:{
            title:'Wi-Fi hotspot - Share your Android devices internet connection with others', 
            metaDescription:'Wi-Fi hotspot - Share your Android devices internet connection with others'
        }
    },
    {
        path: 'Regional_Language_Typing_using_Android_Mobile_Phone/:articleId',
        component: DetailsComponent,
        data:{
            title:'Regional Language Typing using Android Mobile Phone', 
            metaDescription:'Typing in Hindi or some other regional language is a very typical job on android but now it becomes very easy by using Google Indic Keyboard.'
        }
    },
    {
        path: 'Google_Play_Store_Error_Error_retrieving_information_from_server_DF-DFERH-01_Easy_Fix/:articleId',
        component: DetailsComponent,
        data:{
            title:'Google Play Store Error “Error retrieving information from server. [DF-DFERH-01]”: Easy Fix', 
            metaDescription:'Android users are increasing day by day in whole world, due to its easy handling procedure and vast numbers of applications. From a reliable source it is revealed that out of total available smart phones in the world about 80% is Android based, which clearly shows its popularity among the users.'
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

export class AndroidRoutingModule { }