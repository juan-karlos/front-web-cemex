import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoIndustrialesNacionalComponent } from './nivel-riesgo-industriales-nacional.component';

describe('NivelRiesgoIndustrialesNacionalComponent', () => {
  let component: NivelRiesgoIndustrialesNacionalComponent;
  let fixture: ComponentFixture<NivelRiesgoIndustrialesNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoIndustrialesNacionalComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoIndustrialesNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
