import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SharedModule }   from '../shared.module';


import {WindowsRoutingModule } from './windows-routing.module';

@NgModule({
    imports:[
        CommonModule,
        WindowsRoutingModule,
        SharedModule
    ],
    declarations:[
        
    ]
})
export class WindowsModule {}