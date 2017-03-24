import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ServicesComponent } from './main/services/services.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        redirectTo: '',
        pathMatch: 'full'
        
    },
    { 
        path: 'services', 
        loadChildren: 'app/main/services/services.module#ServicesModule' 
    },
    {
        path: '',
        component: DashboardComponent 
    },
    { 
        path: '**', 
        component: DashboardComponent 
    }
    // { path: 'Deals', component: MainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }