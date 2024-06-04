import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevexpressModule } from '../devexpress/devexpress.module';

import { PedidosPendientesComponent } from './pedidos-pendientes/pedidos-pendientes.component';

@NgModule({
  declarations: [PedidosPendientesComponent],
  imports: [CommonModule, DevexpressModule],
  exports: [PedidosPendientesComponent],
})
export class PedidosPendientesModule {}
