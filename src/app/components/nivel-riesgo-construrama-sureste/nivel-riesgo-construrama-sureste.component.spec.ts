import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoConstruramaSuresteComponent } from './nivel-riesgo-construrama-sureste.component';

describe('NivelRiesgoConstruramaSuresteComponent', () => {
  let component: NivelRiesgoConstruramaSuresteComponent;
  let fixture: ComponentFixture<NivelRiesgoConstruramaSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoConstruramaSuresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoConstruramaSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
