import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbIconModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppComponent } from './app.component';
import { FieldCellComponent } from './field-cell/field-cell.component';
import { environment } from '../environments/environment';

const NEBULAR_MODULES = [
  NbThemeModule.forRoot({ name: 'cosmic' }),
  NbLayoutModule,
  NbEvaIconsModule,
  NbButtonModule,
  NbIconModule,
];

@NgModule({
  declarations: [AppComponent, FieldCellComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    ...NEBULAR_MODULES,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
