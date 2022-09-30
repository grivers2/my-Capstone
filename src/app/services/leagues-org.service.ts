import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
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

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) {
  }

  getCustomersSmall() {
    return this.http.get<any>(this.urlGroup)
        .toPromise()
        .then(res => res.data as Groups[])
        .then(data => data);
}

  getLeaguesOrg(): Observable<League> {
    const results: Observable<League> = this.http.get<League>(this.urlLeagues);
    console.log(results);
    return results;
  }

  addMember(groupId: number, newMember: any): Observable<Members> {
    const urlSaveMember = `${this.urlGroup}/${groupId}/members`;
    return this.http.post<Members>(urlSaveMember, newMember.toString(), this.options);
  }

  getMembers() {
    return this.http.get<Members>(this.urlMembers).pipe(map((res: any)=>{
      return res;
    }))
  }

  createNewGroup(newGroup: any): Observable<Groups> {
    return this.http.post<Groups>(this.urlGroup, newGroup.toString(), this.options);
  }

  createNewMember(newMember:any): Observable<Members> {
    return this.http.post<Members>(this.urlMembers, newMember.toString(),this.options);
  }

  getAllGroups(): Observable<Groups[]> {
    return this.http.get<Groups[]>(this.urlGroup)
  }

  getGroups():Observable<any> {
    return this.http.get<any>(this.urlGroup)
  }

  deleteGroupById(GroupId: number): Observable<Groups> {
    return this.http.delete<Groups>(`${this.urlGroup}/${GroupId}`);
  }

  deleteMemberById(MemberId: number): Observable<Members> {
    return this.http.delete<Members>(`${this.urlMembers}/${MemberId}`);
  }

  deleteMembersByGroupIdAndMemberId(groupId: number, memberId: number): Observable<Members[]> {
    return this.http.delete<Members[]>(`${this.urlMembers}/${groupId}/${memberId}`);
  }
  updateGroup(groupId: number, newGroup: any): Observable<Groups> {
    return this.http.put<Groups>(`${this.urlGroup}`, newGroup.toString(), this.options);
  }

  updateMember(groupId: number, newMember: any): Observable<Members> {
    return this.http.put<Members>(`${this.urlMembers}`, newMember.toString(), this.options);
  }

  getMemberById(groupId: number, MemberId: number): Observable<Members> {
    return this.http.get<Members>(`${this.urlMembers}/${groupId}/${MemberId}`);
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

  updateMemberByGroup(groupId: number, memberId: number, newMember: any): Observable<Groups[]> {
    return this.http.put<Groups[]>(`${this.urlMembers}/${groupId}/${memberId}`, newMember.toString(), this.options)
  }

  getMembersByGroupName(groupName: string): Observable<Groups[]> {
    return this.http.get<Groups[]>(`${this.urlMembers}/${groupName}`);
  }
}
