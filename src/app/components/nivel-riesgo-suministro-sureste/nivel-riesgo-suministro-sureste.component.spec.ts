import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoSuministroSuresteComponent } from './nivel-riesgo-suministro-sureste.component';

describe('NivelRiesgoSuministroSuresteComponent', () => {
  let component: NivelRiesgoSuministroSuresteComponent;
  let fixture: ComponentFixture<NivelRiesgoSuministroSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoSuministroSuresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoSuministroSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
