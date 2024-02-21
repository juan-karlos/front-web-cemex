import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoConstructoresNacionalComponent } from './nivel-riesgo-constructores-nacional.component';

describe('NivelRiesgoConstructoresNacionalComponent', () => {
  let component: NivelRiesgoConstructoresNacionalComponent;
  let fixture: ComponentFixture<NivelRiesgoConstructoresNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoConstructoresNacionalComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoConstructoresNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
