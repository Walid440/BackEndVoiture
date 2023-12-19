import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaistiqueComponent } from './staistique.component';

describe('StaistiqueComponent', () => {
  let component: StaistiqueComponent;
  let fixture: ComponentFixture<StaistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
