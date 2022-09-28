import { Groups } from './../model/group-teams.model';
import { LeaguesOrgService } from './../services/leagues-org.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  constructor(private fb: FormBuilder, private leageService: LeaguesOrgService) { }

  myForm = this.fb.group({
    GroupName: [''],
    OrganizationName: [''],
    SponsorName: [''],
    SponsorEmail: [''],
    MaxGroupSize: ['', [Validators.required]],
    SponsorPhone: ['', [Validators.required, Validators.maxLength(30)]],
  });
  ngOnInit() { }

  onSubmit() {
    console.log('Valid?', this.myForm.value); // true or false

    const body = new URLSearchParams();
    body.set('GroupName', this.myForm.value.GroupName || '');
    body.set('OrganizationName', this.myForm.value.OrganizationName || '');
    body.set('SponsorName', this.myForm.value.SponsorName || '');
    body.set('SponsorEmail', this.myForm.value.SponsorEmail || '');
    body.set('MaxGroupSize', this.myForm.value.MaxGroupSize || '0');
    body.set('SponsorPhone', this.myForm.value.SponsorPhone || '');

    this.leageService.createNewGroup(body).subscribe((res: any) => {
      console.log('createNewGroup ===', res);
      this.myForm.reset();
    })
  }
}
