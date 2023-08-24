import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoOperacionesPacificoComponent } from './nivel-riesgo-operaciones-pacifico.component';

describe('NivelRiesgoOperacionesPacificoComponent', () => {
  let component: NivelRiesgoOperacionesPacificoComponent;
  let fixture: ComponentFixture<NivelRiesgoOperacionesPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoOperacionesPacificoComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoOperacionesPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
