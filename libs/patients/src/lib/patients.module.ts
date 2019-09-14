import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { AutofocusFixModule } from "ngx-autofocus-fix";
import { PatientAddEditTreatmentComponent } from "./components/patient-add-edit-treatment/patient-add-edit-treatment.component";
import { PatientAddEditComponent } from "./components/patient-add-edit/patient-add-edit.component";
import { PatientImageComparisonComponent } from "./components/patient-image-comparison/patient-image-comparison.component";
import { PatientImageComponent } from "./components/patient-image/patient-image.component";
import { PatientTreatmentComponent } from "./components/patient-treatment/patient-treatment.component";
import { PatientAddEditContainerComponent } from "./container/patient-add-edit-container/patient-add-edit-container.component";
import { PatientAddEditTreatmentContainerComponent } from "./container/patient-add-edit-treatment-container/patient-add-edit-treatment-container.component";
import { PatientContainerComponent } from './container/patient-container/patient-container.component';
import { PatientImageContainerComponent } from "./container/patient-image-container/patient-image-container.component";
import { PatientImageGalleryComponent } from "./container/patient-image-gallery/patient-image-gallery.component";
import { PatientListComponent } from "./container/patient-list/patient-list.component";
import { NullOrUndefinedPipe } from './pipes/null-or-undefined.pipe';
import { ImportExportService } from './services/export-import.service';
import { PatientPersistor } from "./services/patient-persistor.service";
import { PhotoPersistor } from "./services/patient-photo-persistor.service";
import { TreatmentPersistor } from "./services/patient-treatment-persistor.service";



const PATIENT_COMPONENTS = [
  PatientListComponent,
  PatientAddEditComponent,
  PatientAddEditContainerComponent,
  PatientImageComparisonComponent,
  PatientImageContainerComponent,
  PatientAddEditTreatmentComponent,
  PatientImageGalleryComponent,PatientContainerComponent,
  NullOrUndefinedPipe,
  PatientTreatmentComponent,
  PatientAddEditTreatmentContainerComponent,
  PatientImageComponent
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    AutofocusFixModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: "", component: PatientContainerComponent },
      { path: "treatments/:id", component: PatientImageGalleryComponent }
    ])
  ],
  providers: [PatientPersistor, TreatmentPersistor, PhotoPersistor,ImportExportService],
  declarations: [...PATIENT_COMPONENTS],
  entryComponents: [
    PatientAddEditComponent,
    PatientImageComparisonComponent,
    PatientAddEditContainerComponent,
    PatientAddEditTreatmentContainerComponent
  ]
})
export class PatientsPageModule {}
