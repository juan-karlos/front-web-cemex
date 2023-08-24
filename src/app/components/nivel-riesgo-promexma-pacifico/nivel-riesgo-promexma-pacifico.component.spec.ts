import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoPromexmaPacificoComponent } from './nivel-riesgo-promexma-pacifico.component';

describe('NivelRiesgoPromexmaPacificoComponent', () => {
  let component: NivelRiesgoPromexmaPacificoComponent;
  let fixture: ComponentFixture<NivelRiesgoPromexmaPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoPromexmaPacificoComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoPromexmaPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
