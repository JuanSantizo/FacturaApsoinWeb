import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosPendientesModule } from './pedidos-pendientes/pedidos-pendientes.module';
import { TestModule } from './test/test.module';
import { SEmpresaModule } from './s-empresa/s-empresa.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PedidosPendientesModule,
    SEmpresaModule,
    TestModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
