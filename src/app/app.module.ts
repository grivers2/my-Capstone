import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { GroupComponent } from './group/group.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { HeaderMasterComponent } from './shared/header-master/header-master.component';
import { FooterMasterComponent } from './shared/footer-master/footer-master.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'About', component: InfoPageComponent },
  { path: 'Organizations', component: OrganizationsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    OrganizationsComponent,
    InfoPageComponent,
    GroupComponent,
    NavBarComponent,
    FooterMasterComponent,
    HeaderMasterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    MenubarModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
