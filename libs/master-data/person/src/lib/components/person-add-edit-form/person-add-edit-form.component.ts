import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Gender } from '@kryptand/common-data/gender';
import { Title } from '@kryptand/common-data/title';
import { Salutation } from '@kryptand/common-data/salutation';
import { Person } from '../../models/person';

@Component({
  selector: 'kryptand-person-add-edit-form',
  templateUrl: './person-add-edit-form.component.html',
  styleUrls: ['./person-add-edit-form.component.css']
})
export class PersonAddEditFormComponent implements OnChanges, OnInit {
  @Input() person: Person;
  @Input() salutations: Salutation[];
  @Input() honoraryTitles: Title[];
  @Input() academicTitles: Title[];
  @Input() politicalTitles: Title[];
  @Input() aristocraticTitles: Title[];
  @Input() genders: Gender[];

  @Output() submitEventTriggered = new EventEmitter<Person>();
  @Output() validated = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder) {}
  personForm: FormGroup = this.fb.group({
    firstName: new FormControl(),
    lastName: new FormControl('', [Validators.required]),
    birthName: new FormControl(),
    birthday: new FormControl(),
    gender: new FormControl(),
    politicalTitle: new FormControl(),
    academicTitle: new FormControl(),
    aristocraticTitle: new FormControl(),
    honoraryTitle: new FormControl(),
    salutation: new FormControl(),
    image: new FormControl(),
    address: this.fb.group({
      street: new FormControl(),
      streetNo: new FormControl(),
      zip: new FormControl(),
      city: new FormControl(),
      country: new FormControl('', [Validators.required]),
      county: new FormControl()
    })
  });

  ngOnInit(): void {
    this.personForm.statusChanges.subscribe(() =>
      this.validated.emit(this.personForm.valid)
    );
  }
  ngOnChanges(): void {
    if (this.person) {
      this.personForm.patchValue(this.person);
    }
  }

  submit(form: FormGroup) {
    if (form.valid) {
      this.submitEventTriggered.emit({
        ...this.person,
        ...form.value
      });
    }
  }
}
