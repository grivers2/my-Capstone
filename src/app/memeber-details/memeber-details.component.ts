import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { mergeAll, mergeMap } from 'rxjs';
import { Groups } from '../model/group-teams.model';
import { Members } from '../model/members.model';
import { LeaguesOrgService } from '../services/leagues-org.service';

@Component({
  selector: 'app-memeber-details',
  templateUrl: './memeber-details.component.html',
  styleUrls: ['./memeber-details.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class MemeberDetailsComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  membersDialog!: boolean;

  deleteMemberDialog!: boolean;

  deleteMembersDialog!: boolean;

  members!: Members[];

  groups!: Groups[];

  group!: any;

  member!: any;

  selectedMembers!: Members[];

  submitted!: boolean;

  cols!: Members[];

  addEditFlag!: boolean;

  rowsPerPageOptions =  [5, 10, 20];

  loading!: boolean;
  Members: { field: string; header: string; }[] = [];

  constructor(
    private memberService: LeaguesOrgService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.memberService.getCustomersSmall().then(groups => {
      this.groups = groups;
      this.loading = false;
    });
    this.cols = [
      { field: 'MemberName', header: 'Member Name' },
      { field: 'MemberEmail', header: 'Member Email' },
      { field: 'MemberNumber', header: 'Member Phone'},
    ];
  }

  openNew(flag: boolean, data: any) {
    if (data) {
      this.member = data;
    } else {
      this.member = {};
      this.member['MemberId'] = null;
    }
    this.addEditFlag = flag;
    this.submitted = false;
    this.membersDialog = true;
  }

  applyFilterGlobal($event:any, stringVal: string) {
    this.dt && this.dt.filterGlobal($event.target.value || '', stringVal);
  }

  handleChange(e: any) {
    const element = e.target.id;
    this.group.member[`${element}`] = e.target.value;
    console.log('change ===', this.group.member);
  }

  deleteSelectedMembers() {
    this.deleteMembersDialog = true;
  }

  editMember(member: Members) {
    this.group.member = { ...member};
    this.membersDialog = true;
  }

  deleteMember(member: Members) {
    this.deleteMemberDialog = false;
    this.group.member = {...member};
  }

  confirmDelete(member: Members) {
    this.group.member = member;
    console.log('member info ===', member);
    this.deleteMembersDialog = false;
    this.group.member = this.group.member.filter(
      (val: { group: { MemberId: number; }; }) => val.group.MemberId !== member.MemberId
    );
    this.memberService.deleteMemberById(this.member.MemberId).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Product Deleted',
        life: 3000,
      });
      this.group.member = { ...this.group.member };
    })

  }

  hideDialog() {
    this.membersDialog = false;
    this.submitted = false;
  }

  saveMember() {
    this.submitted = true;

    if (this.group.member.MemberName.trim()) {
      const body = new URLSearchParams();
      body.set('MemberName', this.group.member.MemberName || '');
      body.set('MemberEmail', this.group.member.MemberEmail || '');
      body.set('MemberNumber', this.group.member.MemberNumber || '');

      if (this.group.member.MemberId) {
        body.set('MemberId', this.group.member.MemberId || '');
        this.group.members[this.findIndexById(this.group.member.MemberName)] = this.member;
        this.memberService.updateMember(this.group.member.MemberId, body).subscribe(data => {
          console.log('data updated ===', data);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Member Updated',
            life: 3000,
          });
          this.member = { ...data };
        })
      } else {
        this.group.member.MemberName = this.createId();
        this.memberService.createNewMember(body).subscribe(data => {
          this.group.members.push(data);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Members Created',
            life: 3000,
          });
        });
      }

      this.group.members = [...this.group.members];
      this.membersDialog = false;
      this.group.member = { ...this.group.member };
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.group.members.length; i++) {
      if (this.group.members[i].MemberName === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
