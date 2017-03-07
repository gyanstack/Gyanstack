import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'services/:id', component: MainComponent },
    { path: 'tips_n_tricks/:id', component: MainComponent },
    { path: 'Mobile', component: MainComponent },
    { path: 'Gadgets', component: MainComponent },
    { path: 'Miscellanious', component: MainComponent },
    { path: 'Deals', component: MainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }