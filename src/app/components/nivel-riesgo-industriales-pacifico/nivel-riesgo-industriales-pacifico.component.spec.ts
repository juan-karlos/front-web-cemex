import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoIndustrialesPacificoComponent } from './nivel-riesgo-industriales-pacifico.component';

describe('NivelRiesgoIndustrialesPacificoComponent', () => {
  let component: NivelRiesgoIndustrialesPacificoComponent;
  let fixture: ComponentFixture<NivelRiesgoIndustrialesPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoIndustrialesPacificoComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoIndustrialesPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
