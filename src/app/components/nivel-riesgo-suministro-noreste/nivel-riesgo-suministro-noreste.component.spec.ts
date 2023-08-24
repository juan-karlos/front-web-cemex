import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoSuministroNoresteComponent } from './nivel-riesgo-suministro-noreste.component';

describe('NivelRiesgoSuministroNoresteComponent', () => {
  let component: NivelRiesgoSuministroNoresteComponent;
  let fixture: ComponentFixture<NivelRiesgoSuministroNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoSuministroNoresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoSuministroNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
