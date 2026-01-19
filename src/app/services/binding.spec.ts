import { TestBed } from '@angular/core/testing';

import { Binding } from './binding';

describe('Binding', () => {
  let service: Binding;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Binding);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
