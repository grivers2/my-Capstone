import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeberDetailsComponent } from './memeber-details.component';

describe('MemeberDetailsComponent', () => {
  let component: MemeberDetailsComponent;
  let fixture: ComponentFixture<MemeberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemeberDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
