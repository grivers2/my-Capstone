import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { League } from '../model/league.model';
import { Groups } from '../model/group-teams.model';
import { Members } from '../model/members.model';


@Injectable({
  providedIn: 'root'
})
export class LeaguesOrgService {
  urlLeagues = 'http://127.0.0.1:8082/api/organizations'; // urlLeagues
  urlGroup = 'http://127.0.0.1:8082/api/groups'; //urlGroup
  urlMembers = 'http://127.0.0.1:8082/api/groups/byorganization/'; //urlMembers
  errorMessage?: string;

  constructor(private http: HttpClient) {
  }

  getLeaguesOrg(): Observable<League> {
    const results: Observable<League> = this.http.get<League>(this.urlLeagues);
    console.log(results);
    return results;
  }

  addMember(groupId: number, newMember: Members): Observable<Members> {
    const urlSaveMember = `${this.urlGroup}/${groupId}/members`;
    return this.http.post<Members>(urlSaveMember, newMember);
  }

  createNewGroup(newGroup: Groups): Observable<Groups> {
    return this.http.post<Groups>(this.urlGroup, newGroup);
  }

  createNewMember(newMember: Members): Observable<Members> {
    return this.http.post<Members>(this.urlMembers, newMember);
  }

  getAllGroups(): Observable<Groups[]> {
    return this.http.get<Groups[]>(this.urlGroup)
  }

  getGroupsByOrg(organizationId: number): Observable<Groups[]> {
    return this.http.get<Groups[]>(`${this.urlMembers}/${organizationId}`);
  }

  getGroupById(GroupId: number): Observable<Groups> {
    return this.http.get<Groups>(`${this.urlGroup}/${GroupId}`);
  }

  deleteGroupById(GroupId: number): Observable<Groups> {
    return this.http.delete<Groups>(`${this.urlGroup}/${GroupId}`);
  }

  deleteMembersByGroupIdAndMemberId(groupId: number, memberId: number): Observable<Members[]> {
    return this.http.delete<Members[]>(`${this.urlMembers}/${groupId}/${memberId}`);
  }
  updateGroup(groupId: number, newGroup: Groups): Observable<Groups> {
    return this.http.put<Groups>(`${this.urlGroup}/${groupId}`, newGroup);
  }

  updateMember(groupId: number, newMember: Members): Observable<Members> {
    return this.http.put<Members>(`${this.urlMembers}/${groupId}`, newMember);
  }

  getMemberById(groupId: number, MemberId: number): Observable<Members> {
    return this.http.get<Members>(`${this.urlMembers}/${groupId}/${MemberId}`);
  }

  getMembers(organizationId: number): Observable<Members[]> {
    return this.http.get<Members[]>(`${this.urlMembers}/${organizationId}`);
  }

  getMembersByGroupId(organizationId: number, groupId: number): Observable<Members[]> {
    return this.http.get<Members[]>(`${this.urlMembers}/${organizationId}/${groupId}`);
  }

  getMembersByMemberId(organizationId: number, memberId: number): Observable<Members[]> {
    return this.http.get<Members[]>(`${this.urlMembers}/${organizationId}/${memberId}`);
  }

  getMembersByGroupIdAndMemberId(organizationId: number, groupId: number, memberId: number): Observable<Members[]> {
    return this.http.get<Members[]>(`${this.urlMembers}/${organizationId}/${groupId}/${memberId}`);
  }

  getMembersByGroup(organizationId: number, groupId: number): Observable<Members[]> {
    return this.http.get<Members[]>(`${this.urlMembers}/${organizationId}/${groupId}`);
  }


}
