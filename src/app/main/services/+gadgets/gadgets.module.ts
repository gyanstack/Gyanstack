import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SharedModule }   from '../shared.module';


import {GadgetsRoutingModule } from './gadgets-routing.module';

@NgModule({
    imports:[
        CommonModule,
        GadgetsRoutingModule,
        SharedModule
    ],
    declarations:[
        
    ]
})
export class GadgetsModule {}