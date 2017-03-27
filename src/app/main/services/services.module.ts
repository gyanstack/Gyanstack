import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {ServicesComponent } from './services.component';

import {ServicesRoutingModule } from './services-routing.module';
// import { AndroidModule } from './+android/android.module';
// import { GadgetsModule } from './gadgets/gadgets.module';
// import { IosModule } from './ios/ios.module';
// import { InternetModule } from './internet/internet.module';
// import { NetworkingModule } from './Networking/networking.module';
// import { WindowsModule } from './windows/windows.module';
import { SharedModule }   from './shared.module';

@NgModule({
    imports:[
        CommonModule,
        ServicesRoutingModule,
        // AndroidModule,
        //GadgetsModule,
        //IosModule,
        //InternetModule,
        //NetworkingModule,
        //WindowsModule,
        SharedModule
    ],
    declarations:[
        ServicesComponent
    ]
})
export class ServicesModule {}