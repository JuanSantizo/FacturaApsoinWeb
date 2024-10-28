import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoDetalleComponent } from './ingreso-detalle.component';

describe('IngresoDetalleComponent', () => {
  let component: IngresoDetalleComponent;
  let fixture: ComponentFixture<IngresoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
