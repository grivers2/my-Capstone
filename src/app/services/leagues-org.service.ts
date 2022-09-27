import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { League } from '../model/league.model';

@Injectable({
  providedIn: 'root'
})
export class LeaguesOrgService {
  urlLeagues = 'http://127.0.0.1:8082/api/organizations';

  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  }

  errorMessage?: string;
  leagues?: League[];
  currentLeagues?: League;

  constructor(private http: HttpClient) {
    this.getLeaguesOrg();
  }

  getLeaguesOrg(): Observable<League[]> {
    const results: Observable<League[]> = this.http.get<League[]>(this.urlLeagues);
    console.log(results);
    return results;
  }

  getLeaguesById(leagueId: string): Observable<League> {
    const results: Observable<League> = this.http.get<League>(`${this.urlLeagues}/${leagueId}`);
    return results;
  }
}
