import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEchangeComponent } from './add-echange.component';

describe('AddEchangeComponent', () => {
  let component: AddEchangeComponent;
  let fixture: ComponentFixture<AddEchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
