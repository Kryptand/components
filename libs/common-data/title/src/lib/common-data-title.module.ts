import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { TitleFacade } from './+state/title.facade';
import { titleReducer } from './+state/title.state';
import { Title } from './models/title';
import { TitleService } from './services/title.service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('title', titleReducer),
    NgrxAutoEntityModule.forFeature()
  ],
  providers: [{ provide: Title, useClass: TitleService }, TitleFacade]
})
export class CommonDataTitleModule {}
