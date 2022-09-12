import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule } from 'primeng/menubar'
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // btnClick =  () => {
  //   this.router.navigateByUrl('/src/app/organizations/organizations.component.html')
  // }
}
