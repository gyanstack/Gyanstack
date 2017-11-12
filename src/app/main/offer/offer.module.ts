import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
// import {DomSanitizer} from "@angular/platform-browser";

import {OfferComponent } from './offer.component';
import { OfferListComponent } from './offer.list.component';
import { OfferDetailComponent } from './offer.detail.component';
import {SharedModule} from 'app/main/services/shared.module'
import {OfferRoutingModule } from './offer-routing.module';

@NgModule({
    imports:[
        CommonModule,
        OfferRoutingModule,
        SharedModule
    ],
    declarations:[
        OfferComponent,
        OfferListComponent,
        OfferDetailComponent
    ]
})
export class OfferModule {}