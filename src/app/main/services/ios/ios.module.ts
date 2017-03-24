import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SharedModule }   from '../shared.module';


import {IosRoutingModule } from './ios-routing.module';

@NgModule({
    imports:[
        CommonModule,
        IosRoutingModule,
        SharedModule
    ],
    declarations:[
        
    ]
})
export class IosModule {}