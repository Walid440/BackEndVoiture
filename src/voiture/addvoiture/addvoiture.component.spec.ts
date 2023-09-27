import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvoitureComponent } from './addvoiture.component';

describe('AddvoitureComponent', () => {
  let component: AddvoitureComponent;
  let fixture: ComponentFixture<AddvoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
