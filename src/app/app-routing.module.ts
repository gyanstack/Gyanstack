import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ServicesComponent } from './main/services/services.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: DashboardComponent 
    },
    { 
        path: 'services', 
        loadChildren: 'app/main/services/services.module#ServicesModule' 
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { 
        path: '**', 
        component: DashboardComponent 
    }
    // { path: 'tips_n_tricks/:id', component: MainComponent },
    // { path: 'Mobile', component: MainComponent },
    // { path: 'Gadgets', component: MainComponent },
    // { path: 'Miscellanious', component: MainComponent },
    // { path: 'Deals', component: MainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }