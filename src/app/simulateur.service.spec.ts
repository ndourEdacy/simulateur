import { TestBed } from '@angular/core/testing';

import { SimulateurService } from './simulateur.service';

describe('SimulateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimulateurService = TestBed.get(SimulateurService);
    expect(service).toBeTruthy();
  });
});
