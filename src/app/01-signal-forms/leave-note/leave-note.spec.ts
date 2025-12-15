import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveNote } from './leave-note';

describe('LeaveNote', () => {
  let component: LeaveNote;
  let fixture: ComponentFixture<LeaveNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveNote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
