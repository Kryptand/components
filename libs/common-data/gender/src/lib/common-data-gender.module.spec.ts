import { async, TestBed } from '@angular/core/testing';
import { CommonDataGenderModule } from './common-data-gender.module';

describe('CommonDataGenderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonDataGenderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonDataGenderModule).toBeDefined();
  });
});
