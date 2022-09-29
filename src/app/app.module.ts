import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HeaderMasterComponent } from './header-master/header-master.component';
import { FooterMasterComponent } from './footer-master/footer-master.component';
import { TeamsComponent } from './teams/teams.component';
import { MembersComponent } from './members/members.component';
import { DetailsComponent } from './details/details.component';

import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import { MemeberDetailsComponent } from './memeber-details/memeber-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    NavBarComponent,
    FooterMasterComponent,
    HeaderMasterComponent,
    TeamsComponent,
    MembersComponent,
    ErrorpageComponent,
    DetailsComponent,
    MemeberDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
