import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {CloudComponent } from './cloud.component';
import { DetailsComponent } from './details.component';

import {CloudRoutingModule } from './cloud-routing.module';

@NgModule({
    imports:[
        CommonModule,
        CloudRoutingModule
    ],
    declarations:[
        CloudComponent,
        DetailsComponent
    ]
})
export class CloudModule {}