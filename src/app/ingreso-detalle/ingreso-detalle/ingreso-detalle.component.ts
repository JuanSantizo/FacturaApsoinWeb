import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingreso-detalle',
  templateUrl: './ingreso-detalle.component.html',
  styleUrls: ['./ingreso-detalle.component.css'],
})
export class IngresoDetalleComponent {
  public botonAccion = '';

  public planPagoDataSource = [{ PagoId: 0, Descripcion: '' }];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.botonAccion = 'Insertar';
  }

  public formIngresoDetalle: FormGroup = this.formBuilder.group({
    descripcionControl: [''],
    vinControl: [''],
  });

  cancelarOperacion() {}
  ejecutarOperacion() {
    if (this.botonAccion == 'Insertar') {
    }
    if (this.botonAccion == 'Actualizar') {
    }
  }
}
