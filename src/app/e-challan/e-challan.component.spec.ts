import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EChallanComponent } from './e-challan.component';

describe('EChallanComponent', () => {
  let component: EChallanComponent;
  let fixture: ComponentFixture<EChallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EChallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
