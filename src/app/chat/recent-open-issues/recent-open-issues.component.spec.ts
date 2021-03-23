import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentOpenIssuesComponent } from './recent-open-issues.component';

describe('RecentOpenIssuesComponent', () => {
  let component: RecentOpenIssuesComponent;
  let fixture: ComponentFixture<RecentOpenIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentOpenIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentOpenIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
