import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { ServicesComponent } from './services.component';

const servicesRoutes: Routes = [
    {
        path: '',
        component: ServicesComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: 'Android',
                        data: { title: 'Android' },
                        loadChildren: './+android/android.module#AndroidModule'

                    },
                    {
                        path: 'Miscellaneous',
                        data: { title: 'Miscellaneous' },
                        loadChildren: './+gadgets/gadgets.module#GadgetsModule'
                    },
                    {
                        path: 'Internet',
                        data: { title: 'Internet' },
                        loadChildren: './+internet/internet.module#InternetModule'
                    },
                    {
                        path: 'iOS',
                        data: { title: 'iOS' },
                        loadChildren: './+ios/ios.module#IosModule'
                    },
                    {
                        path: 'Networking',
                        data: { title: 'Networking' },
                        loadChildren: './+Networking/networking.module#NetworkingModule'
                    },
                    {
                        path: 'Windows',
                        data: { title: 'Windows' },
                        loadChildren: './+windows/windows.module#WindowsModule'
                    },
                    {
                        path: '',
                        component: ServicesComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(servicesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ServicesRoutingModule {
    constructor(

    ) {
    }
}