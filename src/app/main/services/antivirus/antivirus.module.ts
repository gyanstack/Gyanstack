import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SharedModule }   from '../shared.module';


import {AntivirusRoutingModule } from './antivirus-routing.module';

@NgModule({
    imports:[
        CommonModule,
        AntivirusRoutingModule,
        SharedModule
    ],
    declarations:[
        
    ]
})
export class AntivirusModule {}