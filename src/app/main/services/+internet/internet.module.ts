import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SharedModule }   from '../shared.module';


import {InternetRoutingModule } from './internet-routing.module';

@NgModule({
    imports:[
        CommonModule,
        InternetRoutingModule,
        SharedModule
    ],
    declarations:[
        
    ]
})
export class InternetModule {}