import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoConstruramaPacificoComponent } from './nivel-riesgo-construrama-pacifico.component';

describe('NivelRiesgoConstruramaPacificoComponent', () => {
  let component: NivelRiesgoConstruramaPacificoComponent;
  let fixture: ComponentFixture<NivelRiesgoConstruramaPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoConstruramaPacificoComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoConstruramaPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
