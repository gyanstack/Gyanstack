import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'main/services/:id', component: MainComponent },
    { path: 'main/tips_n_tricks/:id', component: MainComponent },
    { path: 'main/Mobile', component: MainComponent },
    { path: 'main/Gadgets', component: MainComponent },
    { path: 'main/Miscellanious', component: MainComponent },
    { path: 'main/Deals', component: MainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }