import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { PersonFacade } from '../../+state/person.facade';
import { Person } from '../../models/person';
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
  type: FILTER_TYPES = 'ALL';

  export() {
    alert('export');
  }

  import() {
    alert('import');
  }

  filter(filterType: FILTER_TYPES) {
    if (filterType === 'ALL') {
      this.type = 'ALL';
      this.loadGridData('person');
    }
    if (filterType === 'FAVOURITES') {
      this.type = 'FAVOURITES';
      this.loadGridData('person/listFavourites');
    }
    if (filterType === 'LAST_EDITED') {
      this.type = 'LAST_EDITED';
      this.loadGridData('person/listLastEdited');
    }
  }

  add() {
    this.overlayOpened = !this.overlayOpened;
    this.selection = [];
  }

  print() {
    alert('print');
  }

  favourite(selection) {}
  selectionChanged(selection: Partial<Person>[]) {
    this.selection = selection;
  }

  constructor(public personFacade: PersonFacade) {}

  ngOnInit() {
    this.loadGridData();
  }
  loadGridData(mode?: string) {
    this.gridDataSource = new DataSource(
      new CustomStore({
        load: async (loadOptions: any) => {
          let params = '';
          console.debug(loadOptions);
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
          try {
            const data = await this.personFacade
              .loadPage({ page: page, size: offset }, params, mode)
              .toPromise();
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
