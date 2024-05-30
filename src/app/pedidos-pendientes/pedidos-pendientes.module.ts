import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosPendientesComponent } from './pedidos-pendientes/pedidos-pendientes.component';

@NgModule({
  declarations: [PedidosPendientesComponent],
  imports: [CommonModule],
  exports: [PedidosPendientesComponent],
})
export class PedidosPendientesModule {}
