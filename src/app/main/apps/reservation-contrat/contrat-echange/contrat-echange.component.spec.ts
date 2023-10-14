import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratEchangeComponent } from './contrat-echange.component';

describe('ContratEchangeComponent', () => {
  let component: ContratEchangeComponent;
  let fixture: ComponentFixture<ContratEchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratEchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratEchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
