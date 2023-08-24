import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelRiesgoPromexmaSuresteComponent } from './nivel-riesgo-promexma-sureste.component';

describe('NivelRiesgoPromexmaSuresteComponent', () => {
  let component: NivelRiesgoPromexmaSuresteComponent;
  let fixture: ComponentFixture<NivelRiesgoPromexmaSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelRiesgoPromexmaSuresteComponent]
    });
    fixture = TestBed.createComponent(NivelRiesgoPromexmaSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
