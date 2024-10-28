import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevexpressModule } from '../devexpress/devexpress.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    DevexpressModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [LoginComponent],
})
export class AccesoModule {}
