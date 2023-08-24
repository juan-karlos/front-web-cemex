import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoSuministroPacificoComponent } from './nivel-riesgo-suministro-pacifico.component';

describe('NivelRiesgoSuministroPacificoComponent', () => {
  let component: NivelRiesgoSuministroPacificoComponent;
  let fixture: ComponentFixture<NivelRiesgoSuministroPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoSuministroPacificoComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoSuministroPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
