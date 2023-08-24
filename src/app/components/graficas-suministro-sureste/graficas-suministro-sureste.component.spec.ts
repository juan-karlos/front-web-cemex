import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasSuministroSuresteComponent } from './graficas-suministro-sureste.component';

describe('GraficasSuministroSuresteComponent', () => {
  let component: GraficasSuministroSuresteComponent;
  let fixture: ComponentFixture<GraficasSuministroSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasSuministroSuresteComponent]
    });
    fixture = TestBed.createComponent(GraficasSuministroSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
