import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentResolvedIssuesComponent } from './recent-resolved-issues.component';

describe('RecentResolvedIssuesComponent', () => {
  let component: RecentResolvedIssuesComponent;
  let fixture: ComponentFixture<RecentResolvedIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentResolvedIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentResolvedIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
