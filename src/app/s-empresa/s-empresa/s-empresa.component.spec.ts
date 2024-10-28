import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEmpresaComponent } from './s-empresa.component';

describe('SEmpresaComponent', () => {
  let component: SEmpresaComponent;
  let fixture: ComponentFixture<SEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
