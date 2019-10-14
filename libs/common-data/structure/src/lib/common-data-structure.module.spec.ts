import { async, TestBed } from '@angular/core/testing';
import { CommonDataStructureModule } from './common-data-structure.module';

describe('CommonDataStructureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonDataStructureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonDataStructureModule).toBeDefined();
  });
});
