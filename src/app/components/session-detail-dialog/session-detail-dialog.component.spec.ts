import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDetailDialogComponent } from './session-detail-dialog.component';

describe('SessionDetailDialogComponent', () => {
  let component: SessionDetailDialogComponent;
  let fixture: ComponentFixture<SessionDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
