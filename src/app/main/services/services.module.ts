import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {ServicesComponent } from './services.component';

import {ServicesRoutingModule } from './services-routing.module';
import { VpnModule } from './vpn/vpn.module';
import { CloudModule } from './cloud/cloud.module';
import { BackupModule } from './backup/backup.module';
import { AntivirusModule } from './antivirus/antivirus.module';
import { SharedModule }   from './shared.module';

@NgModule({
    imports:[
        CommonModule,
        ServicesRoutingModule,
        VpnModule,
        CloudModule,
        BackupModule,
        AntivirusModule,
        SharedModule
    ],
    declarations:[
        ServicesComponent
    ]
})
export class ServicesModule {}