import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasTransporteNacionalComponent } from './graficas-transporte-nacional.component';

describe('GraficasTransporteNacionalComponent', () => {
  let component: GraficasTransporteNacionalComponent;
  let fixture: ComponentFixture<GraficasTransporteNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasTransporteNacionalComponent]
    });
    fixture = TestBed.createComponent(GraficasTransporteNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
