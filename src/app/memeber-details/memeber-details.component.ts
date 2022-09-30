import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
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

  members: Members[] = [];

  groups!: Groups[];

  group!: any;

  member!: any;

  selectedMembers!: Members[];

  submitted!: boolean;

  cols!: any;

  addEditFlag!: boolean;

  rowsPerPageOptions =  [5, 10, 20];

  loading!: boolean;


  constructor(
    private memberService: LeaguesOrgService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.memberService.getGroups().subscribe((data) => {
      console.log('get all groups ===', data);
      this.groups = data;
      this.groups.forEach(x => {this.members.push(...x.Members)});
      console.log('all members=', this.members);

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
    this.member[`${element}`] = e.target.value;
    console.log('change ===', this.member);
  }

  deleteSelectedMembers() {
    this.deleteMembersDialog = true;
  }

  editMember(member: Members) {
    this.member = { ...member};
    this.membersDialog = true;
  }

  deleteMember(member: Members) {
    this.deleteMemberDialog = false;
    this.member = {...member};
  }

  confirmDelete(member: Members) {
    this.member = member;
    console.log('member info ===', member);
    this.deleteMembersDialog = false;
    this.member = this.member.filter(
      (val: { group: { MemberId: number; }; }) => val.group.MemberId !== member.MemberId
    );
    this.memberService.deleteMemberById(this.member.MemberId).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Product Deleted',
        life: 3000,
      });
      this.member = { ...this.member };
    })

  }

  hideDialog() {
    this.membersDialog = false;
    this.submitted = false;
  }

  saveMember() {
    this.submitted = true;

    if (this.member.MemberName.trim()) {
      const body = new URLSearchParams();
      body.set('MemberName', this.member.MemberName || '');
      body.set('MemberEmail', this.member.MemberEmail || '');
      body.set('MemberNumber', this.member.MemberNumber || '');

      if (this.member.MemberId && this.group.GroupId) {
        body.set('GroupId', this.group.GroupId || '');
        body.set('MemberId', this.member.MemberId || '');
        this.groups[this.findIndexById(this.group.GroupName)] = this.group;
        this.members[this.findIndexById(this.member.MemberName)] = this.member;
        this.memberService.updateMemberByGroup(this.group.GroupId, this.member.MemberId, body).subscribe(data => {
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
        this.member.MemberName = this.createId();
        this.memberService.createNewMember(body).subscribe(data => {
          this.members.push(data);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Members Created',
            life: 3000,
          });
        });
      }

      this.members = [...this.members];
      this.membersDialog = false;
      this.member = { ...this.member };
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].MemberName === id) {
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
