import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoNoOperativosCentroComponent } from './nivel-riesgo-no-operativos-centro.component';

describe('NivelRiesgoNoOperativosCentroComponent', () => {
  let component: NivelRiesgoNoOperativosCentroComponent;
  let fixture: ComponentFixture<NivelRiesgoNoOperativosCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoNoOperativosCentroComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoNoOperativosCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
