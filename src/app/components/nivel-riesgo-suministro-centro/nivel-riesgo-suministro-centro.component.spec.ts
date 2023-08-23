import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoSuministroCentroComponent } from './nivel-riesgo-suministro-centro.component';

describe('NivelRiesgoSuministroCentroComponent', () => {
  let component: NivelRiesgoSuministroCentroComponent;
  let fixture: ComponentFixture<NivelRiesgoSuministroCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoSuministroCentroComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoSuministroCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
