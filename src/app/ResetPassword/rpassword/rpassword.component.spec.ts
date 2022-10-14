import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPasswordComponent } from './rpassword.component';

describe('RPasswordComponent', () => {
  let component: RPasswordComponent;
  let fixture: ComponentFixture<RPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
