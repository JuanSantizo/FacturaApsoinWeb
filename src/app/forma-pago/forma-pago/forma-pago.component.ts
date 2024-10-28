import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styleUrls: ['./forma-pago.component.css'],
})
export class FormaPagoComponent {
  public botonAccion = '';
  public planPagoDataSource = [{ PagoId: 0, Descripcion: '' }];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.botonAccion = 'Insertar';
  }

  public formFormaPago: FormGroup = this.formBuilder.group({
    capitalControl: [
      '',
      [Validators.required, Validators.min(0), Validators.max(100000)],
    ],
    porcentajeControl: [
      '',
      [Validators.required, Validators.min(0), Validators.max(100)],
    ],
    planPagoControl: [
      '',
      [Validators.required, Validators.min(0), Validators.max(100)],
    ],
    cuotasControl: [
      1,
      [Validators.required, Validators.min(0), Validators.max(100)],
    ],
    interesesControl: [
      0,
      [Validators.required, Validators.min(0), Validators.max(100)],
    ],
    pagoControl: [
      0,
      [Validators.required, Validators.min(0), Validators.max(100)],
    ],
  });

  isValidField(field: string): boolean {
    let tocado: Boolean = false;
    let sucio: boolean = false;
    let valido: boolean = false;

    if (this.formFormaPago.get(field)?.touched) {
      tocado = true;
    } else {
      tocado = false;
    }

    if (this.formFormaPago.get(field)?.dirty) {
      sucio = true;
    } else {
      sucio = false;
    }

    if (this.formFormaPago.get(field)?.valid) {
      valido = true;
    } else {
      valido = false;
    }

    let R: boolean;

    if (tocado || sucio) {
      R = !((tocado || sucio) && valido);
    } else {
      R = false;
    }

    return R;
  }

  getErrorMessage(field: string) {
    let message = '';
    if (this.formFormaPago.get(field)?.hasError('required')) {
      message = 'Es un valor requerido';
    } else if (this.formFormaPago.get(field)?.hasError('minlength')) {
      const minLength =
        this.formFormaPago.get(field)?.errors?.['minlength'].requiredLength;
      message = `El campo debe tener una longitud minima de ${minLength} caracteres`;
    } else if (this.formFormaPago.get(field)?.hasError('maxlength')) {
      const maxLength =
        this.formFormaPago.get(field)?.errors?.['maxlength'].requiredLength;
      message = `El campo debe tener una longitud maxima de ${maxLength} caracteres`;
    } else if (this.formFormaPago.get(field)?.hasError('max')) {
      const max = this.formFormaPago.get(field)?.errors?.['max'].max;
      message = `Maximo ${max}`;
    } else if (this.formFormaPago.get(field)?.hasError('min')) {
      const min = this.formFormaPago.get(field)?.errors?.['min'].min;
      message = `Minimo ${min}`;
    }

    return message;
  }

  cancelarOperacion() {
    this.consultaPedidos();
  }
  ejecutarOperacion() {
    if (this.botonAccion == 'Insertar') {
    }
    if (this.botonAccion == 'Actualizar') {
    }
  }

  consultaPedidos() {
    Swal.fire({
      title: 'Desea hacer factura por pedido',
      // text: '',
      // icon: '',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.formFormaPago.controls['capitalControl'].setValue('888');
      }
    });
  }
}
