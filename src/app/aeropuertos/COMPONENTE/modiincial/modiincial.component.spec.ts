import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiincialComponent } from './modiincial.component';

describe('ModiincialComponent', () => {
  let component: ModiincialComponent;
  let fixture: ComponentFixture<ModiincialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiincialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiincialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
