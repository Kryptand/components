import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';

import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        component: LoginComponent,
        path: ''
      }
    ])
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule {}
