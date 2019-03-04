import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulerEpargneDiasporaComponent } from './simuler-epargne-diaspora.component';

describe('SimulerEpargneDiasporaComponent', () => {
  let component: SimulerEpargneDiasporaComponent;
  let fixture: ComponentFixture<SimulerEpargneDiasporaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulerEpargneDiasporaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulerEpargneDiasporaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
