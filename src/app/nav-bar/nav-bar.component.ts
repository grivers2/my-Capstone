import { Component, OnInit } from '@angular/core';

import { MenubarModule } from 'primeng/menubar'
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  items!: MenuItem[];

  ngOnInit() {
    {
      this.items = [
        {
          label:'ACC',
          items: [
            {label: 'ACC Organizations'},
            {label: 'ACC Groups'}
          ]
        },
        {
          label: 'SEC',
          items: [
            {label: 'SEC Organizations'},
            {label: 'SEC Groups'}
          ]
        },
        {
          label: 'Big Ten',
          items: [
            {label: 'Big Ten Organizations'},
            {label: 'Big Ten Groups'}
          ]
        },
        {
          label: 'Big Twelve',
          items: [
            {label: 'Big Twelve Organizations'},
            {label: 'Big Twelve Groups'}
          ]
        },
        {
          label: 'Pac Ten',
          items: [
            {label: 'Pac Ten'},
            {label: 'Pac Ten'}
          ]
        }

      ]
    }
  }

}
