import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoTransporteNacionalComponent } from './nivel-riesgo-transporte-nacional.component';

describe('NivelRiesgoTransporteNacionalComponent', () => {
  let component: NivelRiesgoTransporteNacionalComponent;
  let fixture: ComponentFixture<NivelRiesgoTransporteNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoTransporteNacionalComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoTransporteNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
