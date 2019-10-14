import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Person } from '../../models/person';
import {ClrDatagridStateInterface} from "@clr/angular";
import { IEntityWithPageInfo } from '@briebug/ngrx-auto-entity';
import { ColumnMode } from '@swimlane/ngx-datatable';
@Component({
  selector: 'kryptand-person-grid',
  templateUrl: './person-grid.component.html',
  styleUrls: ['./person-grid.component.css']
})
export class PersonGridComponent   {
@Input() dataSource:any;
@Output() onePersonSelected:EventEmitter<Person>=new EventEmitter();
@Output() multiPersonSelected:EventEmitter<Person>=new EventEmitter();
@Output() deselect:EventEmitter<any>=new EventEmitter();
selectionChangedHandler(selection:any){
  if(!selection){
    this.deselect.emit();
  }
  if(selection.selectedRowKeys.length===0){
    this.deselect.emit();
  }
  if(selection.selectedRowKeys.length===1){
    this.onePersonSelected.emit(selection.selectedRowKeys[0]);
  }
  this.multiPersonSelected.emit(selection.selectedRowKeys);
}
}
