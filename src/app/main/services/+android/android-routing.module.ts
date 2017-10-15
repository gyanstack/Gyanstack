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