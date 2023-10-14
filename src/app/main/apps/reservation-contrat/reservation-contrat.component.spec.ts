import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationContratComponent } from './reservation-contrat.component';

describe('ReservationContratComponent', () => {
  let component: ReservationContratComponent;
  let fixture: ComponentFixture<ReservationContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
