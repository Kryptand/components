import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../../models/person';
import { PersonFacade } from './../../+state/person.facade';
import { SalutationFacade } from '@kryptand/common-data/salutation';
import { GenderFacade } from '@kryptand/common-data/gender';
import { TitleFacade } from '@kryptand/common-data/title';
@Component({
  selector: 'kryptand-person-add-edit-container',
  templateUrl: './person-add-edit-container.component.html',
  styleUrls: ['./person-add-edit-container.component.css']
})
export class PersonAddEditContainerComponent implements OnInit {
  @Input() person: Person;
  canSave = false;
  @Input() opened: boolean;
  @Output() openedChange = new EventEmitter();
  @Output() saveChange=new EventEmitter();
  constructor(
    public personFacade: PersonFacade,
    public salutationFacade: SalutationFacade,
    public genderFacade: GenderFacade,
    public titleFacade: TitleFacade
  ) {
    this.salutationFacade.loadAll();
    this.genderFacade.loadAll();
    this.titleFacade.loadAll();
  }

  savePerson(formValue: any) {
    console.debug(formValue);
    if (this.canSave) {
      const isCreate = formValue.id;
      isCreate
        ? this.personFacade.update(formValue)
        : this.personFacade.create(formValue);
        this.saveChange.emit(true);
        this.openedChange.emit(false);
    }
  }
  ngOnInit() {}
}
