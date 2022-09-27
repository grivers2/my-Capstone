import { NgModule } from "@angular/core";
import { RouterModule, Routes }  from "@angular/router" ;
import { ErrorpageComponent } from "./errorpage/errorpage.component";
import { LandingComponent } from "./landing/landing.component";
import { OrganizationsComponent } from "./organizations/organizations.component";
import { MembersComponent } from "./members/members.component";
import { TeamsComponent } from "./teams/teams.component";
import { LoginComponent } from "./login/login.component";


const routes: Routes = [
  { path: 'Home', component: LandingComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Leagues', component: OrganizationsComponent },
  { path: 'Teams', component: TeamsComponent },
  { path: 'Members', component: MembersComponent },
  { path: 'Login', component: LoginComponent },
  { path: '**', component: ErrorpageComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
