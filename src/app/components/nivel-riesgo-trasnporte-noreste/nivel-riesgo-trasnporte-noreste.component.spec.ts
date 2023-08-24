import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoTrasnporteNoresteComponent } from './nivel-riesgo-trasnporte-noreste.component';

describe('NivelRiesgoTrasnporteNoresteComponent', () => {
  let component: NivelRiesgoTrasnporteNoresteComponent;
  let fixture: ComponentFixture<NivelRiesgoTrasnporteNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoTrasnporteNoresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoTrasnporteNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
