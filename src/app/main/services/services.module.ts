import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {ServicesComponent } from './services.component';

import {ServicesRoutingModule } from './services-routing.module';
import { VpnModule } from './vpn/vpn.module';

@NgModule({
    imports:[
        CommonModule,
        ServicesRoutingModule,
        VpnModule
    ],
    declarations:[
        ServicesComponent
    ]
})
export class ServicesModule {}