import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoOperacionesNacionalComponent } from './nivel-riesgo-operaciones-nacional.component';

describe('NivelRiesgoOperacionesNacionalComponent', () => {
  let component: NivelRiesgoOperacionesNacionalComponent;
  let fixture: ComponentFixture<NivelRiesgoOperacionesNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoOperacionesNacionalComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoOperacionesNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
