import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoOperacionesCentroComponent } from './nivel-riesgo-operaciones-centro.component';

describe('NivelRiesgoOperacionesCentroComponent', () => {
  let component: NivelRiesgoOperacionesCentroComponent;
  let fixture: ComponentFixture<NivelRiesgoOperacionesCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoOperacionesCentroComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoOperacionesCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
