import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { SharedModule }   from '../shared.module';

import {VpnRoutingModule } from './vpn-routing.module';

@NgModule({
    imports:[
        CommonModule,
        VpnRoutingModule,
        SharedModule
    ],
    declarations:[
        
    ]
})
export class VpnModule {}