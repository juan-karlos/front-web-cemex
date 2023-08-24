import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoConstruramaNoresteComponent } from './nivel-riesgo-construrama-noreste.component';

describe('NivelRiesgoConstruramaNoresteComponent', () => {
  let component: NivelRiesgoConstruramaNoresteComponent;
  let fixture: ComponentFixture<NivelRiesgoConstruramaNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoConstruramaNoresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoConstruramaNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
