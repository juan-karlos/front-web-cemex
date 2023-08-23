import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoOperacionesNoresteComponent } from './nivel-riesgo-operaciones-noreste.component';

describe('NivelRiesgoOperacionesNoresteComponent', () => {
  let component: NivelRiesgoOperacionesNoresteComponent;
  let fixture: ComponentFixture<NivelRiesgoOperacionesNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoOperacionesNoresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoOperacionesNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
