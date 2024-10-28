import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevexpressModule } from '../devexpress/devexpress.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';

@NgModule({
  declarations: [RegistrarClienteComponent],
  imports: [
    CommonModule,
    DevexpressModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [RegistrarClienteComponent],
})
export class RegistrarClienteModule {}
