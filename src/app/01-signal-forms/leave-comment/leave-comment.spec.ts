import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveComment } from './leave-comment';

describe('LeaveComment', () => {
  let component: LeaveComment;
  let fixture: ComponentFixture<LeaveComment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveComment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveComment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
