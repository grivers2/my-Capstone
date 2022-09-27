import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { MenuItem } from 'primeng/api';
// import { TooltipModule } from 'primeng/tooltip';
// import { Subscription } from 'rxjs';
// import { BreadcrumbService } from '../services/breadcrumb.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isActive?: boolean = true;

  constructor() { }
  ngOnInit() { }
}



