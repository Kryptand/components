import { async, TestBed } from '@angular/core/testing';
import { CommonDataSalutationModule } from './common-data-salutation.module';

describe('CommonDataSalutationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonDataSalutationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonDataSalutationModule).toBeDefined();
  });
});
