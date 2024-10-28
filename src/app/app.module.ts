import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { PedidosPendientesModule } from './pedidos-pendientes/pedidos-pendientes.module';
import { TestModule } from './test/test.module';
import { RegistrarClienteModule } from './registrar-cliente/registrar-cliente.module';
import { FormaPagoModule } from './forma-pago/forma-pago.module';
import { IngresoDetalleModule } from './ingreso-detalle/ingreso-detalle.module';
import { AccesoModule } from './acceso/acceso.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    NgxMaskDirective,
    NgxMaskPipe,

    PedidosPendientesModule,
    TestModule,
    RegistrarClienteModule,
    FormaPagoModule,
    IngresoDetalleModule,
    AccesoModule,
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
