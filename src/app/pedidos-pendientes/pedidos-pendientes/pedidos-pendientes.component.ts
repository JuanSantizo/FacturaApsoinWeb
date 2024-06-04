import { Component } from '@angular/core';
import { PedidosPendientes } from '../interfaces/pedidosPendientes.inteface';

@Component({
  selector: 'app-pedidos-pendientes',
  templateUrl: './pedidos-pendientes.component.html',
  styleUrls: ['./pedidos-pendientes.component.css'],
})
export class PedidosPendientesComponent {
  isVisiblegridContainer: boolean = true;
  listPedidosPendientes: PedidosPendientes[] = [
    {
      IdCliente: 1,
      Cliente: 'F01',
      Fecha: new Date('2024-06-01'),
      Solicitud: 'Solicitud001',
      Cantidad: 1,
      Total: 101,
    },
    {
      IdCliente: 2,
      Cliente: 'F02',
      Fecha: new Date('2024-06-02'),
      Solicitud: 'Solicitud002',
      Cantidad: 2,
      Total: 102,
    },
    {
      IdCliente: 3,
      Cliente: 'F03',
      Fecha: new Date('2024-06-03'),
      Solicitud: 'Solicitud003',
      Cantidad: 3,
      Total: 103,
    },
    {
      IdCliente: 4,
      Cliente: 'F04',
      Fecha: new Date('2024-06-04'),
      Solicitud: 'Solicitud004',
      Cantidad: 4,
      Total: 104,
    },
    {
      IdCliente: 5,
      Cliente: 'F05',
      Fecha: new Date('2024-06-05'),
      Solicitud: 'Solicitud005',
      Cantidad: 5,
      Total: 105,
    },
    {
      IdCliente: 6,
      Cliente: 'F06',
      Fecha: new Date('2024-06-06'),
      Solicitud: 'Solicitud006',
      Cantidad: 6,
      Total: 106,
    },
    {
      IdCliente: 7,
      Cliente: 'F07',
      Fecha: new Date('2024-06-07'),
      Solicitud: 'Solicitud007',
      Cantidad: 7,
      Total: 107,
    },
    {
      IdCliente: 8,
      Cliente: 'F08',
      Fecha: new Date('2024-06-08'),
      Solicitud: 'Solicitud008',
      Cantidad: 8,
      Total: 108,
    },
    {
      IdCliente: 9,
      Cliente: 'F09',
      Fecha: new Date('2024-06-09'),
      Solicitud: 'Solicitud009',
      Cantidad: 9,
      Total: 109,
    },
  ];
}
