import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SharedModule }   from '../shared.module';


import {MacRoutingModule } from './mac-routing.module';

@NgModule({
    imports:[
        CommonModule,
        MacRoutingModule,
        SharedModule
    ],
    declarations:[
        
    ]
})
export class MacModule {}