import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoPromexmaNoresteComponent } from './nivel-riesgo-promexma-noreste.component';

describe('NivelRiesgoPromexmaNoresteComponent', () => {
  let component: NivelRiesgoPromexmaNoresteComponent;
  let fixture: ComponentFixture<NivelRiesgoPromexmaNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoPromexmaNoresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoPromexmaNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
