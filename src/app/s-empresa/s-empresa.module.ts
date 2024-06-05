import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SEmpresaComponent } from './s-empresa/s-empresa.component';



@NgModule({
  declarations: [
    SEmpresaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SEmpresaComponent
  ]
})
export class SEmpresaModule { }
