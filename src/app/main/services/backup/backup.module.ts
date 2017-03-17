import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SharedModule }   from '../shared.module';


import {BackupRoutingModule } from './backup-routing.module';

@NgModule({
    imports:[
        CommonModule,
        BackupRoutingModule,
        SharedModule
    ],
    declarations:[
        
    ]
})
export class BackupModule {}