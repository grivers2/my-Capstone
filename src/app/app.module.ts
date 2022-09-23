import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';

import { HeaderMasterComponent } from './shared/header-master/header-master.component';
import { FooterMasterComponent } from './shared/footer-master/footer-master.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TeamsComponent } from './teams/teams.component';
import { MembersComponent } from './teams/members/members.component';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    OrganizationsComponent,
    NavBarComponent,
    FooterMasterComponent,
    HeaderMasterComponent,
    SidebarComponent,
    TeamsComponent,
    MembersComponent,
    ErrorpageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
