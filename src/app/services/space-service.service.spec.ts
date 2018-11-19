import { TestBed } from '@angular/core/testing';

import { SpaceServiceService } from './space-service.service';

describe('SpaceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpaceServiceService = TestBed.get(SpaceServiceService);
    expect(service).toBeTruthy();
  });
});
