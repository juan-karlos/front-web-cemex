import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoIndustrialesCentroComponent } from './nivel-riesgo-industriales-centro.component';

describe('NivelRiesgoIndustrialesCentroComponent', () => {
  let component: NivelRiesgoIndustrialesCentroComponent;
  let fixture: ComponentFixture<NivelRiesgoIndustrialesCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoIndustrialesCentroComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoIndustrialesCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
