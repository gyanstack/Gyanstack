import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactDetailComponent } from './about/contact.component';
import { DisclaimerComponent } from './about/disclaimer.component';
import { ServicesComponent } from './main/services/services.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        redirectTo: '',
        pathMatch: 'full'
        
    },
    { 
        path: 'services', 
        loadChildren: './main/services/services.module#ServicesModule' 
    },
    {
        path: 'about',
        component: AboutComponent 
    },
    {
        path: 'contact',
        component: ContactDetailComponent 
    },
    {
        path: 'disclaimer',
        component: DisclaimerComponent 
    },
    {
        path: '',
        component: DashboardComponent 
    },
    { 
        path: '**', 
        component: DashboardComponent 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }