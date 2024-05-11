import { TestBed } from '@angular/core/testing';

import { ConfigureRepository } from './configure.repo';

describe('ConfigureRepository', () => {
  let service: ConfigureRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigureRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
