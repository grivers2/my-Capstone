import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { League } from '../model/league.model';

@Injectable({
  providedIn: 'root'
})
export class LeaguesOrgService {

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(`http://localhost:8082/api/organizations`);
  }
}
