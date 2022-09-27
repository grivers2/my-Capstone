import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
