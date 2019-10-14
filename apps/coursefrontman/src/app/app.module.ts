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

@NgModule({
   declarations: [
      AppComponent,
      StructureComponent,
      TestComponentComponent
   ],
   imports: [
      RouterModule.forRoot([{path:'master-data',redirectTo:'master-data/person'},{path:'common-data',redirectTo:'common-data/gender'},{
        loadChildren: () => import('@kryptand/master-data/person').then(m => m.MasterDataPersonModule),path:'master-data/person'},{component:TestComponentComponent,path:'master-data/company'},{component:TestComponentComponent,path:'common-data/gender'}]),
      BrowserModule,
      ClarityModule,
      StoreModule.forRoot([]),
      EffectsModule.forRoot([]),
      NgrxAutoEntityModule.forRoot() ,
      BrowserAnimationsModule,
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
      }),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
