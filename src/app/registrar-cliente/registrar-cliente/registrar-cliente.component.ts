import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css'],
})
export class RegistrarClienteComponent {
  public botonAccion = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.botonAccion = 'Insertar';
  }

  public formRegistrarCliente: FormGroup = this.formBuilder.group({
    nitControl: [''],
    dPIControl: [''],
    nombreControl: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(59)],
    ],
    apellidoControl: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(59)],
    ],
    direccionControl: [''],
    telefonoControl: [],
    celularControl: [],
    oficinaControl: [],
    emailControl: [],
  });

  isValidField(field: string): boolean {
    let tocado: Boolean = false;
    let sucio: boolean = false;
    let valido: boolean = false;

    if (this.formRegistrarCliente.get(field)?.touched) {
      tocado = true;
    } else {
      tocado = false;
    }

    if (this.formRegistrarCliente.get(field)?.dirty) {
      sucio = true;
    } else {
      sucio = false;
    }

    if (this.formRegistrarCliente.get(field)?.valid) {
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
    if (this.formRegistrarCliente.get(field)?.hasError('required')) {
      message = 'Es un valor requerido';
    } else if (this.formRegistrarCliente.get(field)?.hasError('minlength')) {
      const minLength =
        this.formRegistrarCliente.get(field)?.errors?.['minlength']
          .requiredLength;
      message = `El campo debe tener una longitud minima de ${minLength} caracteres`;
    } else if (this.formRegistrarCliente.get(field)?.hasError('maxlength')) {
      const maxLength =
        this.formRegistrarCliente.get(field)?.errors?.['maxlength']
          .requiredLength;
      message = `El campo debe tener una longitud maxima de ${maxLength} caracteres`;
    } else if (this.formRegistrarCliente.get(field)?.hasError('max')) {
      const max = this.formRegistrarCliente.get(field)?.errors?.['max'].max;
      message = `Maximo ${max}`;
    } else if (this.formRegistrarCliente.get(field)?.hasError('min')) {
      const min = this.formRegistrarCliente.get(field)?.errors?.['min'].min;
      message = `Minimo ${min}`;
    }

    return message;
  }

  cancelarOperacion() {}
  ejecutarOperacion() {
    if (this.botonAccion == 'Insertar') {
    }
    if (this.botonAccion == 'Actualizar') {
    }
  }
}
