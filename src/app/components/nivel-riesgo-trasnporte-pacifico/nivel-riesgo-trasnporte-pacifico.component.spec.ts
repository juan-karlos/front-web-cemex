import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoTrasnportePacificoComponent } from './nivel-riesgo-trasnporte-pacifico.component';

describe('NivelRiesgoTrasnportePacificoComponent', () => {
  let component: NivelRiesgoTrasnportePacificoComponent;
  let fixture: ComponentFixture<NivelRiesgoTrasnportePacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoTrasnportePacificoComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoTrasnportePacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
