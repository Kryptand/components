import { async, TestBed } from '@angular/core/testing';
import { CommonDataAddressModule } from './common-data-address.module';

describe('CommonDataAddressModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonDataAddressModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonDataAddressModule).toBeDefined();
  });
});
