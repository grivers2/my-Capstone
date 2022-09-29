import { LeaguesOrgService } from './../services/leagues-org.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {

  league?: any;
  leagueSubscription!: Subscription;
  errorMessage?: string;


  constructor(private router: Router, private leagueService:LeaguesOrgService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.leagueSubscription = this.leagueService.getLeaguesOrg().subscribe({
      next: (res: any) => {
        this.league = res;
        console.log(this.league);
      },
      error: (err) => {
        this.errorMessage = err;
        console.log(this.errorMessage = err.message);
      },
      complete: () => {
        console.log(`called getLeaguesOrg()`);
      },
    });

  }

  btnClick =  () => {
    this.router.navigateByUrl('/Teams')
  }

  ngOnDestroy(): void {
    this.leagueSubscription.unsubscribe()
  }
}
