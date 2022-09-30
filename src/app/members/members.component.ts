import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Groups } from '../model/group-teams.model';
import { LeaguesOrgService } from '../services/leagues-org.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private fb: FormBuilder, private leageService: LeaguesOrgService) { }

  groups: any;

  myForm = this.fb.group({
    GroupId: ['']
  });
  ngOnInit() {
    this.leageService.getAllGroups().subscribe((res: Groups[]) => {
      console.log('get all groups ===', res)
      this.groups = res;
    })
  }

  groupSelect(e: any) {
    console.log('groupSelect', e.target.value);
    this.myForm.patchValue({'GroupId': e.target.value});
  }

  // onSubmit() {
  //   console.log('member component ===', this.myForm.value); // true or false

  //   const body = new URLSearchParams();
  //   body.set('MemberEmail', this.myForm.value.MemberEmail || '');
  //   body.set('MemberName', this.myForm.value.MemberName || '');
  //   body.set('MemberPhone', this.myForm.value.MemberPhone || '');

  //   this.leageService.addMember(parseInt(this.myForm.value.GroupId || '') || 0, body).subscribe((res: any) => {
  //     console.log('addMember ===', res);
  //     this.myForm.reset();
  //   })
  // }

}
