import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoConstruramaCentroComponent } from './nivel-riesgo-construrama-centro.component';

describe('NivelRiesgoConstruramaCentroComponent', () => {
  let component: NivelRiesgoConstruramaCentroComponent;
  let fixture: ComponentFixture<NivelRiesgoConstruramaCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoConstruramaCentroComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoConstruramaCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
