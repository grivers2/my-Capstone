import { TestBed } from '@angular/core/testing';

import { LeaguesOrgService } from './leagues-org.service';

describe('LeaguesOrgService', () => {
  let service: LeaguesOrgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaguesOrgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
