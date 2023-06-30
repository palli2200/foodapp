import { TestBed } from '@angular/core/testing';

import { CeptertestingInterceptor } from './ceptertesting.interceptor';

describe('CeptertestingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CeptertestingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CeptertestingInterceptor = TestBed.inject(CeptertestingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
