import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasTransporteCentroComponent } from './graficas-transporte-centro.component';

describe('GraficasTransporteCentroComponent', () => {
  let component: GraficasTransporteCentroComponent;
  let fixture: ComponentFixture<GraficasTransporteCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasTransporteCentroComponent]
    });
    fixture = TestBed.createComponent(GraficasTransporteCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
