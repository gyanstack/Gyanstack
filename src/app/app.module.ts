import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {ServicesModule } from './main/services/services.module';
import{ContentService} from './appServices/content.service';
import {NgForm} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { AdvertismentComponent } from './advertisment/advertisment.component';
import { HeaderFeaturedComponent } from './header-featured/header-featured.component';
import { AboutComponent } from './about/about.component';
import { ContactDetailComponent } from './about/contact.component';
import { DisclaimerComponent } from './about/disclaimer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AdvertismentComponent,
    HeaderFeaturedComponent,
    AboutComponent,
    ContactDetailComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    AppRoutingModule,
    ServicesModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
