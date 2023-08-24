import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoConstructoresCentroComponent } from './nivel-riesgo-constructores-centro.component';

describe('NivelRiesgoConstructoresCentroComponent', () => {
  let component: NivelRiesgoConstructoresCentroComponent;
  let fixture: ComponentFixture<NivelRiesgoConstructoresCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoConstructoresCentroComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoConstructoresCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
