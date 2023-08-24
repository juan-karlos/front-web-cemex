import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoTrasnporteSuresteComponent } from './nivel-riesgo-trasnporte-sureste.component';

describe('NivelRiesgoTrasnporteSuresteComponent', () => {
  let component: NivelRiesgoTrasnporteSuresteComponent;
  let fixture: ComponentFixture<NivelRiesgoTrasnporteSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoTrasnporteSuresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoTrasnporteSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
