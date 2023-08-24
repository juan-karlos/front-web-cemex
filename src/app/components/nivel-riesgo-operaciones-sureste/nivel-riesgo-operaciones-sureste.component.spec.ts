import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoOperacionesSuresteComponent } from './nivel-riesgo-operaciones-sureste.component';

describe('NivelRiesgoOperacionesSuresteComponent', () => {
  let component: NivelRiesgoOperacionesSuresteComponent;
  let fixture: ComponentFixture<NivelRiesgoOperacionesSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoOperacionesSuresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoOperacionesSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
