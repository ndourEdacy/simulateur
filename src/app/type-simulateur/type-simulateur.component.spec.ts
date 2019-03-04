import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSimulateurComponent } from './type-simulateur.component';

describe('TypeSimulateurComponent', () => {
  let component: TypeSimulateurComponent;
  let fixture: ComponentFixture<TypeSimulateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSimulateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
