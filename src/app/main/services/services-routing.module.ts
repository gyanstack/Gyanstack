import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
                        path: 'android',
                        data: { title: 'Android' },
                        loadChildren: 'app/main/services/android/android.module#AndroidModule'
                        
                    },
                    {
                        path: 'gadgets',
                        data: { title: 'Gadgets' },
                        loadChildren: 'app/main/services/gadgets/gadgets.module#GadgetsModule'
                    },
                    {
                        path: 'internet',
                        data: { title: 'Internet' },
                        loadChildren: 'app/main/services/internet/internet.module#InternetModule'
                    },
                    {
                        path: 'ios',
                        data: { title: 'Ios' },
                        loadChildren: 'app/main/services/ios/ios.module#IosModule'
                    },
                    {
                        path: 'mac',
                        data: { title: 'Mac' },
                        loadChildren: 'app/main/services/MAC/mac.module#MacModule'
                    },
                    {
                        path: 'windows',
                        data: { title: 'Windows' },
                        loadChildren: 'app/main/services/windows/windows.module#WindowsModule'
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

export class ServicesRoutingModule { }