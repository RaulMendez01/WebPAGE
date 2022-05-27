import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroincialComponent } from './aeroincial.component';

describe('AeroincialComponent', () => {
  let component: AeroincialComponent;
  let fixture: ComponentFixture<AeroincialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeroincialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroincialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
