import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';

import { PostComment } from './postComment.component';
import { ServicesChildComponent } from './service.child.component';
import { DetailsComponent } from './services.child.detail.component';
import { CeiboShare } from 'ng2-social-share';


@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations:[
        ServicesChildComponent,
        DetailsComponent,
        PostComment,
        CeiboShare
    ]
})
export class SharedModule {}