import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulerAvComponent } from './simuler-av.component';

describe('SimulerAvComponent', () => {
  let component: SimulerAvComponent;
  let fixture: ComponentFixture<SimulerAvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulerAvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulerAvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
