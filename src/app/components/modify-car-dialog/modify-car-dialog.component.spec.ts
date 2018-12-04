import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCarDialogComponent } from './modify-car-dialog.component';

describe('ModifyCarDialogComponent', () => {
  let component: ModifyCarDialogComponent;
  let fixture: ComponentFixture<ModifyCarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyCarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
