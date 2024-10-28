import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { DevexpressModule } from '../devexpress/devexpress.module';

import { IngresoDetalleComponent } from './ingreso-detalle/ingreso-detalle.component';

@NgModule({
  declarations: [IngresoDetalleComponent],
  imports: [
    CommonModule,
    DevexpressModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [IngresoDetalleComponent],
})
export class IngresoDetalleModule {}
