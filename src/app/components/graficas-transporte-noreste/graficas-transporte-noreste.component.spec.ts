import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasTransporteNoresteComponent } from './graficas-transporte-noreste.component';

describe('GraficasTransporteNoresteComponent', () => {
  let component: GraficasTransporteNoresteComponent;
  let fixture: ComponentFixture<GraficasTransporteNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasTransporteNoresteComponent]
    });
    fixture = TestBed.createComponent(GraficasTransporteNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
