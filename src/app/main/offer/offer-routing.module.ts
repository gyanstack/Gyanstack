import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { OfferComponent } from './offer.component';
import { OfferListComponent } from './offer.list.component';
import { OfferDetailComponent } from './offer.detail.component';

const offerRoutes: Routes = [
    {
        path: '',
        component: OfferComponent,
        children: [
            {
                path: 'antivirus',
                data: { title: 'Antivirus', section: 'antivirus' },
                component: OfferListComponent
            },
            {
                path: 'vpn',
                data: { title: 'VPN', section: 'vpn' },
                component: OfferListComponent
            },
            {
                path: 'webHosting',
                data: { title: 'Web Hosting', section: 'webHosting' },
                component: OfferListComponent
            },
            {
                path:'antivirus/article/:id',
                component:OfferDetailComponent
            },
            {
                path:'vpn/article/:id',
                component:OfferDetailComponent
            },
            {
                path:'webHosting/article/:id',
                component:OfferDetailComponent
            },
            {
                path:'article/:id',
                component:OfferDetailComponent
            },
            {
                path: '',
                data: { title: 'Offer Zone', section: 'offer' },
                component: OfferListComponent
            },
            {
                path:'**',
                component:OfferDetailComponent
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(offerRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class OfferRoutingModule {
    constructor(

    ) {
    }
}