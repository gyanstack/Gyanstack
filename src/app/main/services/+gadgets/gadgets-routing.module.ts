import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesChildComponent } from '../service.child.component';
import { DetailsComponent } from '../services.child.detail.component';

const routes: Routes = [
    {
        path: 'Freeze_Unfreeze_Row_or_Column_in_Microsoft_Excel/:articleId',
        component: DetailsComponent,
        data:{
            title:'Freeze/Unfreeze Row or Column in Microsoft Excel',
            metaDescription:'Microsoft Excel is a tool is to prepare data in table format and provide various methods to operate the data to convert it into desired form of the user. Some times when the data is very large it become very difficult to remember which column indicates what data. To solve out this problem MS Excel provide a facility names Freeze Panes.'
        }
    },
    {
        path: 'Top_10_Women_personal_safety_apps/:articleId',
        component: DetailsComponent,
        data:{
            title:'Top 10 Women personal safety apps', 
            metaDescription:'Top 10 Women personal safety apps'
        }
    },
    {
        path: 'CERT_In_Indian_Computer_emergency_response_team_what_is_it/:articleId',
        component: DetailsComponent,
        data:{
            title:'CERT-In- “Indian Computer emergency response team”, what is it?', 
            metaDescription:'CERT-In is the national incidence response center for major computer security incidents in Indian Cyber Community. It also works to raise awareness about cyber security among people and help them to recover from cyber incident technically.'
        }
    },
    {
        path: 'Retailer_Recharge_Reversal_Bsnl_Airtel_Vodafone_Idea_Reliance_Mechanism/:articleId',
        component: DetailsComponent,
        data:{
            title:'How to Reverse Wrong Ctop-Up Recharge done by Retailer/dealer', 
            metaDescription:'Sometimes due to human error these retailers made recharge to wrong numbers. So every operator provides a mechanism to reverse the wrong recharge to avoid the loss of the retailers.'
        }
    },
    {
        path: '',
        component: ServicesChildComponent
    },
    { 
        path: '**', 
        component: DetailsComponent 
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

export class GadgetsRoutingModule { }