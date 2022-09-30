import { Groups } from './../model/group-teams.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LeaguesOrgService } from '../services/leagues-org.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class DetailsComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  groupDialog!: boolean;

  deleteGroupDialog!: boolean;

  deleteGroupsDialog!: boolean;

  groups!: Groups[];

  group!: any;

  selectedGroups!: Groups[];

  submitted!: boolean;

  cols!: any[];

  addEditFlag!: boolean;

  rowsPerPageOptions = [5, 10, 20];

  constructor(
    private groupService: LeaguesOrgService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.groupService.getGroups().subscribe((data) => {
      console.log('get all groups ===', data);
      this.groups = data;
    });

    this.cols = [
      { field: 'GroupName', header: 'Group Name' },
      { field: 'OrganizationName', header: 'Organization Name' },
      { field: 'SponsorName', header: 'Sponsor Name' },
      { field: 'SponsorEmail', header: 'Sponsor Email' },
      { field: 'MaxGroupSize', header: 'Group Size' },
      { field: 'SponsorPhone', header: 'Sponsor Number' },
    ];
  }

  openNew(flag: boolean, data: any) {
    if (data) {
      this.group = data;
    } else {
      this.group = {};
      this.group['GroupId'] = null;
    }
    this.addEditFlag = flag;
    this.submitted = false;
    this.groupDialog = true;
  }

  applyFilterGlobal($event:any, stringVal: string) {
    this.dt && this.dt.filterGlobal($event.target.value || '', stringVal);
  }

  handleChange(e: any) {
    const element = e.target.id;
    this.group[`${element}`] = e.target.value;
    console.log('change ===', this.group);
  }

  deleteSelectedProducts() {
    this.deleteGroupsDialog = true;
  }

  editProduct(group: Groups) {
    this.group = { ...group };
    this.groupDialog = true;
  }

  deleteProduct(group: Groups) {
    this.deleteGroupDialog = true;
    this.group = { ...group };
  }

  confirmDelete(group: Groups) {
    this.group = group;
    console.log('group info ===', group);
    this.deleteGroupsDialog = false;
    this.groups = this.groups.filter(
      (val) => val.GroupId !== group.GroupId
    );
    this.groupService.deleteGroupById(group.GroupId).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Product Deleted',
        life: 3000,
      });
      this.group = { ...this.group };
    })

  }

  hideDialog() {
    this.groupDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.group.GroupName.trim()) {
      const body = new URLSearchParams();
      body.set('GroupName', this.group.GroupName || '');
      body.set('OrganizationName', this.group.OrganizationName || '');
      body.set('SponsorName', this.group.SponsorName || '');
      body.set('SponsorEmail', this.group.SponsorEmail || '');
      body.set('MaxGroupSize', this.group.MaxGroupSize || '');
      body.set('SponsorPhone', this.group.SponsorPhone || '');

      if (this.group.GroupId) {
        body.set('GroupId', this.group.GroupId || '');
        this.groups[this.findIndexById(this.group.GroupName)] = this.group;
        this.groupService.updateGroup(this.group.GroupId, body).subscribe(data => {
          console.log('data updated ===', data);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Groups Updated',
            life: 3000,
          });
          this.group = { ...data };
        })
      } else {
        this.group.GroupName = this.createId();
        this.groupService.createNewGroup(body).subscribe(data => {
          this.groups.push(data);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Groups Created',
            life: 3000,
          });
        });
      }

      this.groups = [...this.groups];
      this.groupDialog = false;
      this.group = { ...this.group };
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].GroupName === id) {
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
