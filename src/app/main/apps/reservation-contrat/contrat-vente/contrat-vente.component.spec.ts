import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratVenteComponent } from './contrat-vente.component';

describe('ContratVenteComponent', () => {
  let component: ContratVenteComponent;
  let fixture: ComponentFixture<ContratVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratVenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
