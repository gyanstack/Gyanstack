import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {VpnComponent } from './vpn.component';
import { DetailsComponent } from './details.component';

import {VpnRoutingModule } from './vpn-routing.module';

@NgModule({
    imports:[
        CommonModule,
        VpnRoutingModule
    ],
    declarations:[
        VpnComponent,
        DetailsComponent
    ]
})
export class VpnModule {}