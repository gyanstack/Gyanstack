import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {AntivirusComponent } from './antivirus.component';
import { DetailsComponent } from './details.component';

import {AntivirusRoutingModule } from './antivirus-routing.module';

@NgModule({
    imports:[
        CommonModule,
        AntivirusRoutingModule
    ],
    declarations:[
        AntivirusComponent,
        DetailsComponent
    ]
})
export class AntivirusModule {}