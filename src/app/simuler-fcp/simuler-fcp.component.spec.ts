import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulerFcpComponent } from './simuler-fcp.component';

describe('SimulerFcpComponent', () => {
  let component: SimulerFcpComponent;
  let fixture: ComponentFixture<SimulerFcpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulerFcpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulerFcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
