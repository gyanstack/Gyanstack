import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {VpnComponent } from './vpn.component';

import {VpnRoutingModule } from './vpn-routing.module';

@NgModule({
    imports:[
        CommonModule,
        VpnRoutingModule
    ],
    declarations:[
        VpnComponent
    ]
})
export class VpnModule {}