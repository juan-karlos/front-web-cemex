import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarRequerimientoComponent } from './actualizar-requerimiento.component';

describe('ActualizarRequerimientoComponent', () => {
  let component: ActualizarRequerimientoComponent;
  let fixture: ComponentFixture<ActualizarRequerimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarRequerimientoComponent]
    });
    fixture = TestBed.createComponent(ActualizarRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
