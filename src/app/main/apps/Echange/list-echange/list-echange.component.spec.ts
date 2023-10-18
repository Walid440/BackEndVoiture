import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEchangeComponent } from './list-echange.component';

describe('ListEchangeComponent', () => {
  let component: ListEchangeComponent;
  let fixture: ComponentFixture<ListEchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
