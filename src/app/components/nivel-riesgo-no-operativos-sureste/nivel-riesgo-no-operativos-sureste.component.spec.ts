import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoNoOperativosSuresteComponent } from './nivel-riesgo-no-operativos-sureste.component';

describe('NivelRiesgoNoOperativosSuresteComponent', () => {
  let component: NivelRiesgoNoOperativosSuresteComponent;
  let fixture: ComponentFixture<NivelRiesgoNoOperativosSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoNoOperativosSuresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoNoOperativosSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
