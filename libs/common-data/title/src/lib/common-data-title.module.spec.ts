import { async, TestBed } from '@angular/core/testing';
import { CommonDataTitleModule } from './common-data-title.module';

describe('CommonDataTitleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonDataTitleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonDataTitleModule).toBeDefined();
  });
});
