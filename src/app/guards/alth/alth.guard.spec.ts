import { TestBed, async, inject } from '@angular/core/testing';

import { AlthGuard } from './alth.guard';

describe('AlthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlthGuard]
    });
  });

  it('should ...', inject([AlthGuard], (guard: AlthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
