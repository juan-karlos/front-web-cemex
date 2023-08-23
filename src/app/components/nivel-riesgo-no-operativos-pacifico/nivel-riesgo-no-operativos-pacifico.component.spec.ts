import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoNoOperativosPacificoComponent } from './nivel-riesgo-no-operativos-pacifico.component';

describe('NivelRiesgoNoOperativosPacificoComponent', () => {
  let component: NivelRiesgoNoOperativosPacificoComponent;
  let fixture: ComponentFixture<NivelRiesgoNoOperativosPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoNoOperativosPacificoComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoNoOperativosPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
