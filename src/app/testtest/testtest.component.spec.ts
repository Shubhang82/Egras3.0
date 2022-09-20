import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttestComponent } from './testtest.component';

describe('TesttestComponent', () => {
  let component: TesttestComponent;
  let fixture: ComponentFixture<TesttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesttestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
