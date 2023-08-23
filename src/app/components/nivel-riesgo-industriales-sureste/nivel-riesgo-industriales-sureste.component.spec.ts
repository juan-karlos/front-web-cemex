import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoIndustrialesSuresteComponent } from './nivel-riesgo-industriales-sureste.component';

describe('NivelRiesgoIndustrialesSuresteComponent', () => {
  let component: NivelRiesgoIndustrialesSuresteComponent;
  let fixture: ComponentFixture<NivelRiesgoIndustrialesSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoIndustrialesSuresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoIndustrialesSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
