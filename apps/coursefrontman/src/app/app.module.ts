import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { ClarityModule } from '@clr/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { StructureComponent } from './structure/structure.component';
import { TestComponentComponent } from './test-component/test-component.component';
import {
  AuthModule,
  AuthenticationService,
  AuthGuard,
  JwtInterceptor,
  ErrorInterceptor
} from '@kryptand/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, StructureComponent, TestComponentComponent],
  imports: [
    RouterModule.forRoot([
      {
        path: 'master-data',
        redirectTo: 'master-data/person',
        canActivate: [AuthGuard]
      },
      {
        path: 'common-data',
        redirectTo: 'common-data/gender',
        canActivate: [AuthGuard]
      },
      {
        loadChildren: () =>
          import('@kryptand/master-data/person').then(
            m => m.MasterDataPersonModule
          ),
        path: 'master-data/person',

        canActivate: [AuthGuard]
      },
      {
        loadChildren: () => import('@kryptand/auth').then(m => m.AuthModule),
        path: 'login'
      },
      {
        component: TestComponentComponent,
        path: 'master-data/company',
        canActivate: [AuthGuard]
      },
      {
        component: TestComponentComponent,
        path: 'common-data/gender',
        canActivate: [AuthGuard]
      }
    ]),
    BrowserModule,
    ClarityModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    HttpClientModule,
    NgrxAutoEntityModule.forRoot(),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    AuthModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: JwtInterceptor },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: ErrorInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
