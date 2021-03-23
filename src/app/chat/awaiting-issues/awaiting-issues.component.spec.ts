import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingIssuesComponent } from './awaiting-issues.component';

describe('AwaitingIssuesComponent', () => {
  let component: AwaitingIssuesComponent;
  let fixture: ComponentFixture<AwaitingIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwaitingIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
