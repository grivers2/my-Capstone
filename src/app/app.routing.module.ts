import { NgModule } from "@angular/core";
import { RouterModule, Routes }  from "@angular/router" ;
import { ErrorpageComponent } from "./errorpage/errorpage.component";
import { GroupComponent } from "./group/group.component";
import { LandingComponent } from "./landing/landing.component";
import { OrganizationsComponent } from "./organizations/organizations.component";
import { MembersComponent } from "./teams/members/members.component";
import { TeamsComponent } from "./teams/teams.component";


const appRoutes: Routes = [
  { path: 'Home', component: LandingComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Organizations', component: OrganizationsComponent },
  { path: 'Teams', component: TeamsComponent },
  { path: 'Members', component: MembersComponent },
  { path: '**', component: ErrorpageComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
