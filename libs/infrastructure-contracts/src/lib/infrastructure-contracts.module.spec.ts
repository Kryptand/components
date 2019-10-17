import { async, TestBed } from '@angular/core/testing';
import { InfrastructureContractsModule } from './infrastructure-contracts.module';

describe('InfrastructureContractsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InfrastructureContractsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(InfrastructureContractsModule).toBeDefined();
  });
});
