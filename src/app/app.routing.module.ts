import { NgModule } from "@angular/core";
import { RouterModule, Routes }  from "@angular/router" ;
import { GroupComponent } from "./group/group.component";
import { LandingComponent } from "./landing/landing.component";
import { OrganizationsComponent } from "./organizations/organizations.component";

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'Organizations', component: OrganizationsComponent },
  { path: 'Group', component: GroupComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
