import { TestBed } from '@angular/core/testing';

import { ProjectRefetchService } from './project-refetch.service';

describe('ProjectRefetchService', () => {
  let service: ProjectRefetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectRefetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
