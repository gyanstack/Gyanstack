import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ServicesChildComponent } from './service.child.component';
import { DetailsComponent } from './services.child.detail.component';

@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations:[
        ServicesChildComponent,
        DetailsComponent
    ]
})
export class SharedModule {}