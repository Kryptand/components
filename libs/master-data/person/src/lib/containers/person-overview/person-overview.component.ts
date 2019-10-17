import { Component, AfterViewInit, OnInit } from '@angular/core';
import { PersonFacade } from '../../+state/person.facade';
import { Person } from '../../models/person';
import { Observable } from 'rxjs';
import { IEntityWithPageInfo } from '@briebug/ngrx-auto-entity';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
type FILTER_TYPES = 'ALL' | 'FAVOURITES' | 'LAST_EDITED';
@Component({
  selector: 'kryptand-person-overview',
  templateUrl: './person-overview.component.html',
  styleUrls: ['./person-overview.component.css']
})
export class PersonOverviewComponent implements OnInit {
  gridDataSource: DataSource = new DataSource([]);
  overlayOpened = false;
  selection: Partial<Person>[] = [];
  export() {
    alert('export');
  }
  import() {
    alert('import');
  }
  filter(filterType: FILTER_TYPES) {
    alert(filterType);
  }

  add() {
    this.overlayOpened = !this.overlayOpened;
    this.selection = [];
  }
  print() {
    alert('print');
  }
  favourite(selection) {
    console.debug(selection);
  }
  selectionChanged(selection: Partial<Person>[]) {
    console.debug(selection);
    this.selection = selection;
  }
  constructor(public personFacade: PersonFacade) {}

  ngOnInit() {
    this.loadGridData();
  }
  loadGridData() {
    this.gridDataSource = new DataSource(
      new CustomStore({
        load: async (loadOptions: any) => {
          let params = '';

          const page = loadOptions.skip / loadOptions.take + 1;
          const offset = loadOptions.take;

          if (loadOptions.sort) {
            params += 'sort=' + loadOptions.sort[0].selector;
            if (loadOptions.sort[0].desc) {
              params += ',DESC';
            } else {
              params += ',ASC';
            }
          }
          console.debug(loadOptions);
          try {
            const data = await this.personFacade
              .loadPage({ page: page, size: offset }, params)
              .toPromise();
            console.debug(data);
            return {
              data: data.entities,
              totalCount: data.pageInfo.totalCount
            };
          } catch (error) {
            throw 'Data Loading Error';
          }
        }
      })
    );
  }
  gridOptionsChanged(change: any) {}
  entityChanged() {
    this.gridDataSource.reload();
    this.selection = [];
  }
}
