import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasSuministroNacionalComponent } from './graficas-suministro-nacional.component';

describe('GraficasSuministroNacionalComponent', () => {
  let component: GraficasSuministroNacionalComponent;
  let fixture: ComponentFixture<GraficasSuministroNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasSuministroNacionalComponent]
    });
    fixture = TestBed.createComponent(GraficasSuministroNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
