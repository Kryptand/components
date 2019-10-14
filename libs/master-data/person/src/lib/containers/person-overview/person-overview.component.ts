import { Component, AfterViewInit,OnInit } from '@angular/core';
import { PersonFacade } from '../../+state/person.facade';
import { Person } from '../../models/person';
import { Observable } from 'rxjs';
import { IEntityWithPageInfo } from '@briebug/ngrx-auto-entity';
import CustomStore from 'devextreme/data/custom_store';

type FILTER_TYPES = 'ALL' | 'FAVOURITES' | 'LAST_EDITED';
@Component({
  selector: 'kryptand-person-overview',
  templateUrl: './person-overview.component.html',
  styleUrls: ['./person-overview.component.css']
})
export class PersonOverviewComponent implements OnInit{
  gridDataSource: any = {};
  add() {
    alert('add');
  }
  export() {
    alert('export');
  }
  import() {
    alert('import');
  }
  filter(filterType: FILTER_TYPES) {
    alert(filterType);
  }
  print() {
    alert('print');
  }
  constructor(public personFacade: PersonFacade) {}

  ngOnInit(){
    this.gridDataSource.store = new CustomStore({
      load:(loadOptions: any) =>{
          let params = '';

         const page=(loadOptions.skip/loadOptions.take)+1;
         const offset=loadOptions.take;

          if(loadOptions.sort) {
              params += 'sort='+loadOptions.sort[0].selector;
              if(loadOptions.sort[0].desc) {
                  params += ',DESC';
              }else {
                params += ',ASC';
            }
          }
          console.debug(loadOptions)
          return this.personFacade.loadPage({page:page,size:offset},params)
              .toPromise()
              .then((data: any) => {
                console.debug(data);
                  return {
                      data: data.entities,
                      totalCount: data.pageInfo.totalCount
                  }
              })
              .catch(error => { throw 'Data Loading Error' });
      }
  });
  }
  gridOptionsChanged(change: any) {


}
}
