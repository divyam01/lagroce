import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAcceptedIssuesComponent } from './recent-accepted-issues.component';

describe('RecentAcceptedIssuesComponent', () => {
  let component: RecentAcceptedIssuesComponent;
  let fixture: ComponentFixture<RecentAcceptedIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentAcceptedIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentAcceptedIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
