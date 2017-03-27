import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SharedModule }   from '../shared.module';


import {AndroidRoutingModule } from './android-routing.module';

@NgModule({
    imports:[
        CommonModule,
        AndroidRoutingModule,
        SharedModule
    ],
    declarations:[
        
    ]
})
export class AndroidModule {}