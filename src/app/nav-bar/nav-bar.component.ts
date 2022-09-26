import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from '../services/breadcrumb.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

 subscription: Subscription;

 items!: MenuItem[];

 constructor(public breadcrumbService: BreadcrumbService) {
  this.subscription = breadcrumbService.itemsHandler.subscribe(
      (response) => {
          this.items = response;
      }
  );

  // this.home = { icon: 'pi pi-home', routerLink: '/' };
}

 ngOnInit(): void {
  this.items = [
      {label: 'Home', routerLink: ['/home']},
      {label: 'Leagues', routerLink: ['/leagues']},
      {label: 'Teams', routerLink: ['/teams']},
      {label: 'Members', routerLink: ['/members']},
      {label: 'Login', routerLink: ['/login']}
  ];
}


@Input() model?: MenuItem[];

@Input() style?: any;

@Input() styleClass?: string;

@Input() home?: MenuItem;

@Input() homeAriaLabel?: string;

@Output() onItemClick: EventEmitter<any> = new EventEmitter();

itemClick(event: { preventDefault: () => void; }, item: MenuItem) {
    if (item.disabled) {
        event.preventDefault();
        return;
    }

    if (!item.url && !item.routerLink) {
        event.preventDefault();
    }

    if (item.command) {
        item.command({
            originalEvent: event,
            item: item
        });
    }

    this.onItemClick.emit({
        originalEvent: event,
        item: item
    });
}

onHomeClick(event: { preventDefault: () => void; }) {
    if (this.home) {
        this.itemClick(event, this.home);
    }
}
}

// @NgModule({
// imports: [CommonModule,RouterModule,TooltipModule],
// exports: [NavBarComponent,RouterModule,TooltipModule],
// declarations: [NavBarComponent]
// })
export class BreadcrumbModule { }

export {MenuItem}
