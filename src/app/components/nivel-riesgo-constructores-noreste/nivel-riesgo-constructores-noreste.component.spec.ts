import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoConstructoresNoresteComponent } from './nivel-riesgo-constructores-noreste.component';

describe('NivelRiesgoConstructoresNoresteComponent', () => {
  let component: NivelRiesgoConstructoresNoresteComponent;
  let fixture: ComponentFixture<NivelRiesgoConstructoresNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoConstructoresNoresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoConstructoresNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
