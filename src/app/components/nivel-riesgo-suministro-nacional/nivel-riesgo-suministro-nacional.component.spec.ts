import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoSuministroNacionalComponent } from './nivel-riesgo-suministro-nacional.component';

describe('NivelRiesgoSuministroNacionalComponent', () => {
  let component: NivelRiesgoSuministroNacionalComponent;
  let fixture: ComponentFixture<NivelRiesgoSuministroNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoSuministroNacionalComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoSuministroNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
