import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { ClarityModule } from '@clr/angular';
import { StoreModule } from '@ngrx/store';
import { DxDataGridModule } from 'devextreme-angular';
import { PersonFacade } from './+state/person.facade';
import { personReducer } from './+state/person.state';
import { PersonGridComponent } from './components/person-grid/person-grid.component';
import { PersonOverviewComponent } from './containers/person-overview/person-overview.component';
import { Person } from './models/person';
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [PersonOverviewComponent, PersonGridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ component: PersonOverviewComponent, path: '' }]),
    StoreModule.forFeature('person', personReducer),
    ClarityModule,
    NgrxAutoEntityModule.forFeature(),
    HttpClientModule,
    DxDataGridModule
  ],
  providers: [{ provide: Person, useClass: PersonService }, PersonFacade]
})
export class MasterDataPersonModule {}
