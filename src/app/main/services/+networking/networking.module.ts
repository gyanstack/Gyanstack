import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SharedModule }   from '../shared.module';


import {NetworkingRoutingModule } from './networking-routing.module';

@NgModule({
    imports:[
        CommonModule,
        NetworkingRoutingModule,
        SharedModule
    ],
    declarations:[
        
    ]
})
export class NetworkingModule {}