import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {BackupComponent } from './backup.component';
import { DetailsComponent } from './details.component';

import {BackupRoutingModule } from './backup-routing.module';

@NgModule({
    imports:[
        CommonModule,
        BackupRoutingModule
    ],
    declarations:[
        BackupComponent,
        DetailsComponent
    ]
})
export class BackupModule {}