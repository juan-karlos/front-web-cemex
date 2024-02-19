import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoNoOperativosNacionalComponent } from './nivel-riesgo-no-operativos-nacional.component';

describe('NivelRiesgoNoOperativosNacionalComponent', () => {
  let component: NivelRiesgoNoOperativosNacionalComponent;
  let fixture: ComponentFixture<NivelRiesgoNoOperativosNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoNoOperativosNacionalComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoNoOperativosNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
