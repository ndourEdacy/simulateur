import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulerPlacementComponent } from './simuler-placement.component';

describe('SimulerPlacementComponent', () => {
  let component: SimulerPlacementComponent;
  let fixture: ComponentFixture<SimulerPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulerPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulerPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
