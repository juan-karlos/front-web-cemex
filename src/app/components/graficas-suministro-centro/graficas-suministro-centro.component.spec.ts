import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasSuministroCentroComponent } from './graficas-suministro-centro.component';

describe('GraficasSuministroCentroComponent', () => {
  let component: GraficasSuministroCentroComponent;
  let fixture: ComponentFixture<GraficasSuministroCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasSuministroCentroComponent]
    });
    fixture = TestBed.createComponent(GraficasSuministroCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
