import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevexpressModule } from '../devexpress/devexpress.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

import { FormaPagoComponent } from './forma-pago/forma-pago.component';

@NgModule({
  declarations: [FormaPagoComponent],
  imports: [
    CommonModule,
    DevexpressModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [FormaPagoComponent],
})
export class FormaPagoModule {}
