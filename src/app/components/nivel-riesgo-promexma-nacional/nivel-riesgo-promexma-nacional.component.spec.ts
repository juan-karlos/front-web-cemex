import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoPromexmaNacionalComponent } from './nivel-riesgo-promexma-nacional.component';

describe('NivelRiesgoPromexmaNacionalComponent', () => {
  let component: NivelRiesgoPromexmaNacionalComponent;
  let fixture: ComponentFixture<NivelRiesgoPromexmaNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoPromexmaNacionalComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoPromexmaNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
