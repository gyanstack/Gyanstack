import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SharedModule }   from '../shared.module';


import {CloudRoutingModule } from './cloud-routing.module';

@NgModule({
    imports:[
        CommonModule,
        CloudRoutingModule,
        SharedModule
    ],
    declarations:[
        
    ]
})
export class CloudModule {}