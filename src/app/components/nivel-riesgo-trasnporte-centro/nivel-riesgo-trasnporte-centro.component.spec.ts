import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoTrasnporteCentroComponent } from './nivel-riesgo-trasnporte-centro.component';

describe('NivelRiesgoTrasnporteCentroComponent', () => {
  let component: NivelRiesgoTrasnporteCentroComponent;
  let fixture: ComponentFixture<NivelRiesgoTrasnporteCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoTrasnporteCentroComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoTrasnporteCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
