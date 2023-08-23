import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoConstructoresSuresteComponent } from './nivel-riesgo-constructores-sureste.component';

describe('NivelRiesgoConstructoresSuresteComponent', () => {
  let component: NivelRiesgoConstructoresSuresteComponent;
  let fixture: ComponentFixture<NivelRiesgoConstructoresSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoConstructoresSuresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoConstructoresSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
