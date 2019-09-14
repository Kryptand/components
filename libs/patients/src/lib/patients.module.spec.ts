import { async, TestBed } from '@angular/core/testing';
import { PatientsModule } from './patients.module';

describe('PatientsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PatientsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PatientsModule).toBeDefined();
  });
});
