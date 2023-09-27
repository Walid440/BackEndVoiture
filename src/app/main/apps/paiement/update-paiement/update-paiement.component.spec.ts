import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaiementComponent } from './update-paiement.component';

describe('UpdatePaiementComponent', () => {
  let component: UpdatePaiementComponent;
  let fixture: ComponentFixture<UpdatePaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
