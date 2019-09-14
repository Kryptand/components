import { async, TestBed } from '@angular/core/testing';
import { DelayedHttpOperationsModule } from './delayed-http-operations.module';

describe('DelayedHttpOperationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DelayedHttpOperationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DelayedHttpOperationsModule).toBeDefined();
  });
});
