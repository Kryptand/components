import { async, TestBed } from '@angular/core/testing';
import { MasterDataCompanyModule } from './master-data-company.module';

describe('MasterDataCompanyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MasterDataCompanyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MasterDataCompanyModule).toBeDefined();
  });
});
