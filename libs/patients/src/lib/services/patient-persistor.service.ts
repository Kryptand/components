import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Patient } from '../models/patient';
import { from, Observable } from 'rxjs';
import * as uuid from 'uuid';
import { isNullOrUndefined } from 'util';
import { PhotoPersistor } from './patient-photo-persistor.service';
import { TreatmentPersistor } from './patient-treatment-persistor.service';
import { switchMap } from 'rxjs/operators';

const PATIENTS_STORAGE_KEY = '[PATIENTS]';

@Injectable()
export class PatientPersistor {
  constructor(
    private storage: Storage,
    private treatmentPersistor: TreatmentPersistor
  ) {}
  save(patient: Patient): Observable<any> {
    const id = uuid.v4();
    patient.id = id;
    return from(
      this.storage.set(`${PATIENTS_STORAGE_KEY}${patient.id}`, patient)
    );
  }
  update(patient: Patient): Observable<any> {
    const remove = from(
      this.storage.remove(`${PATIENTS_STORAGE_KEY}${patient.id}`)
    );

    return remove.pipe(
      switchMap(_ =>
        from(this.storage.set(`${PATIENTS_STORAGE_KEY}${patient.id}`, patient))
      )
    );
  }
  getSingle(id: string): Observable<Patient> {
    return from(this.storage.get(`${PATIENTS_STORAGE_KEY}${id}`));
  }
  list(): Observable<Patient[]> {
    return from(
      this.storage.keys().then(keys =>
        Promise.all(
          keys.map(async k => {
            const contains = k.startsWith(PATIENTS_STORAGE_KEY);

            if (contains) {
              const value = await this.storage.get(k);
              if (!isNullOrUndefined(value)) {
                return value;
              }
            }
          })
        )
      )
    );
  }
  remove(id: string): Observable<any> {
    this.treatmentPersistor.removeForPatient(id);
    return from(this.storage.remove(`${PATIENTS_STORAGE_KEY}${id}`));
  }
}
