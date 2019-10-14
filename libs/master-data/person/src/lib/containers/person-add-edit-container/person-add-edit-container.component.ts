import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kryptand-person-add-edit-container',
  templateUrl: './person-add-edit-container.component.html',
  styleUrls: ['./person-add-edit-container.component.css']
})
export class PersonAddEditContainerComponent implements OnInit {
  @Input() person:Person;
  constructor() { }

  ngOnInit() {
  }

}
