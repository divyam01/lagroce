import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingForAcceptComponent } from './waiting-for-accept.component';

describe('WaitingForAcceptComponent', () => {
  let component: WaitingForAcceptComponent;
  let fixture: ComponentFixture<WaitingForAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingForAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingForAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
