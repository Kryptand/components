import { async, TestBed } from '@angular/core/testing';
import { UserDataFavouriteModule } from './user-data-favourite.module';

describe('UserDataFavouriteModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserDataFavouriteModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UserDataFavouriteModule).toBeDefined();
  });
});
