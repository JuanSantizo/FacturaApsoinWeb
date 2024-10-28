import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  mostrarDatosNoValidos: string = 'No';

  constructor(private fb: FormBuilder) {}

  public formLogin: FormGroup = this.fb.group({
    usernameControl: ['F3'],
    passwordControl: ['Ab456789'],
  });

  ejecutarIngresar() {
    let l_username: string = this.formLogin.value.usernameControl;
    let l_password: string = this.formLogin.value.passwordControl;
  }
}
