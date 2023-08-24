import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasTransportePacificoComponent } from './graficas-transporte-pacifico.component';

describe('GraficasTransportePacificoComponent', () => {
  let component: GraficasTransportePacificoComponent;
  let fixture: ComponentFixture<GraficasTransportePacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasTransportePacificoComponent]
    });
    fixture = TestBed.createComponent(GraficasTransportePacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
