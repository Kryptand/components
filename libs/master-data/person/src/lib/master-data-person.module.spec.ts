import { async, TestBed } from '@angular/core/testing';
import { MasterDataPersonModule } from './master-data-person.module';

describe('MasterDataPersonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MasterDataPersonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MasterDataPersonModule).toBeDefined();
  });
});
