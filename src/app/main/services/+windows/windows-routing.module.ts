import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesChildComponent } from '../service.child.component';
import { DetailsComponent } from '../services.child.detail.component';

const routes: Routes = [
    {
        path: 'how_to_open_command_prompt_in_windows_7_8_10/:articleId',
        component: DetailsComponent
    },
    {
        path: 'desktop_screen_rotate_solution/:articleId',
        component: DetailsComponent
    },
    {
        path: 'windows_installation_using_bootable_USB_Drive/:articleId',
        component: DetailsComponent
    },
    {
        path: '',
        component: ServicesChildComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class WindowsRoutingModule { }