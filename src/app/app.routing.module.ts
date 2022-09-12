import { NgModule } from "@angular/core";
import { RouterModule, Routes }  from "@angular/router"
import { GroupComponent } from "./group/group.component";
import { InfoPageComponent } from "./info-page/info-page.component";
import { LandingComponent } from "./landing/landing.component";
import { OrganizationsComponent } from "./organizations/organizations.component";

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'About', component: InfoPageComponent },
  { path: 'Organizations', component: OrganizationsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
