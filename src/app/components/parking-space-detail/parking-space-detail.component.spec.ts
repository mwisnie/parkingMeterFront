import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpaceDetailComponent } from './parking-space-detail.component';

describe('ParkingSpaceDetailComponent', () => {
  let component: ParkingSpaceDetailComponent;
  let fixture: ComponentFixture<ParkingSpaceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingSpaceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSpaceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
