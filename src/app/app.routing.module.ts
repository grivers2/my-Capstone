import { NgModule } from "@angular/core";
import { RouterModule, Routes }  from "@angular/router" ;
import { ErrorpageComponent } from "./errorpage/errorpage.component";
import { LandingComponent } from "./landing/landing.component";
import { OrganizationsComponent } from "./organizations/organizations.component";
import { MembersComponent } from "./members/members.component";
import { TeamsComponent } from "./teams/teams.component";


const routes: Routes = [
  { path: 'Home',
  component: LandingComponent,
    data: {
    breadcrumb:  'Home'}},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Leagues', component: OrganizationsComponent,
    data: {
    breadcrumb:  'Leagues'}},
  { path: 'Teams', component: TeamsComponent,
    data: {
    breadcrumb:  'Teams'}},
  { path: 'Members', component: MembersComponent, data: {
    breadcrumb:  'Members'}},
  { path: '**', component: ErrorpageComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
