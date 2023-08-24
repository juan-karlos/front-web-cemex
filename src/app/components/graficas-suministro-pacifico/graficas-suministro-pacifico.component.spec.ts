import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasSuministroPacificoComponent } from './graficas-suministro-pacifico.component';

describe('GraficasSuministroPacificoComponent', () => {
  let component: GraficasSuministroPacificoComponent;
  let fixture: ComponentFixture<GraficasSuministroPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasSuministroPacificoComponent]
    });
    fixture = TestBed.createComponent(GraficasSuministroPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
