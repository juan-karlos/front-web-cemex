import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoIndustrialesNoresteComponent } from './nivel-riesgo-industriales-noreste.component';

describe('NivelRiesgoIndustrialesNoresteComponent', () => {
  let component: NivelRiesgoIndustrialesNoresteComponent;
  let fixture: ComponentFixture<NivelRiesgoIndustrialesNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoIndustrialesNoresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoIndustrialesNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
