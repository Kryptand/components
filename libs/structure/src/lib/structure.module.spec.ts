import { async, TestBed } from '@angular/core/testing';
import { StructureModule } from './structure.module';

describe('StructureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StructureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StructureModule).toBeDefined();
  });
});
