import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { PersonAddEditContainerComponent } from './containers/person-add-edit-container/person-add-edit-container.component';
import { PersonAddEditFormComponent } from './components/person-add-edit-form/person-add-edit-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonDataAddressModule } from '@kryptand/common-data/address';
import { CommonDataGenderModule } from '@kryptand/common-data/gender';
import { CommonDataSalutationModule } from '@kryptand/common-data/salutation';
import { CommonDataTitleModule } from '@kryptand/common-data/title';
import { SplitPipe } from './split.pipe';
import { JwtInterceptor, ErrorInterceptor } from '@kryptand/auth';
@NgModule({
  declarations: [
    PersonOverviewComponent,
    PersonGridComponent,
    PersonAddEditContainerComponent,
    PersonAddEditFormComponent,
    SplitPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { component: PersonOverviewComponent, path: '' },
      { component: PersonOverviewComponent, path: 'favourites' }
    ]),
    StoreModule.forFeature('person', personReducer),
    NgrxAutoEntityModule.forFeature(),
    ClarityModule,
    HttpClientModule,
    DxDataGridModule,
    CommonDataAddressModule,
    CommonDataGenderModule,
    CommonDataSalutationModule,
    CommonDataTitleModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: ErrorInterceptor },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: JwtInterceptor },
    { provide: Person, useClass: PersonService },
    PersonFacade
  ]
})
export class MasterDataPersonModule {}
