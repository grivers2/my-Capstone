import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';

import { BreadcrumbModule } from 'primeng/breadcrumb';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HeaderMasterComponent } from './header-master/header-master.component';
import { FooterMasterComponent } from './footer-master/footer-master.component';
import { TeamsComponent } from './teams/teams.component';
import { MembersComponent } from './members/members.component';
import { MembersService } from './services/members.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    OrganizationsComponent,
    NavBarComponent,
    FooterMasterComponent,
    HeaderMasterComponent,
    TeamsComponent,
    MembersComponent,
    ErrorpageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BreadcrumbModule
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }