import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClick =  () => {
    this.router.navigateByUrl('/Teams')
  }
}
