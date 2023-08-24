import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoPromexmaCentroComponent } from './nivel-riesgo-promexma-centro.component';

describe('NivelRiesgoPromexmaCentroComponent', () => {
  let component: NivelRiesgoPromexmaCentroComponent;
  let fixture: ComponentFixture<NivelRiesgoPromexmaCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoPromexmaCentroComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoPromexmaCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
