import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoNoOperativosNoresteComponent } from './nivel-riesgo-no-operativos-noreste.component';

describe('NivelRiesgoNoOperativosNoresteComponent', () => {
  let component: NivelRiesgoNoOperativosNoresteComponent;
  let fixture: ComponentFixture<NivelRiesgoNoOperativosNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoNoOperativosNoresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoNoOperativosNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
