import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoConstructoresPacificoComponent } from './nivel-riesgo-constructores-pacifico.component';

describe('NivelRiesgoConstructoresPacificoComponent', () => {
  let component: NivelRiesgoConstructoresPacificoComponent;
  let fixture: ComponentFixture<NivelRiesgoConstructoresPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoConstructoresPacificoComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoConstructoresPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
